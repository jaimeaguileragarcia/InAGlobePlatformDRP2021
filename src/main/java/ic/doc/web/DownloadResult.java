package ic.doc.web;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.InputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class DownloadResult {

  private final String query;
  private final String answer;
  private File tempFile = null;

  public DownloadResult(String query, String answer) {
    this.query = query;
    this.answer = answer;
  }

  private void createMarkdown() throws IOException {
    if (tempFile != null) {
      return;
    }

    tempFile = new File("temp.md");
    if (!tempFile.createNewFile()) {
      throw new IOException("DownloadResult.createMarkdown: temp.md already exists.");
    }

    FileWriter writer = new FileWriter("temp.md");

    if (answer == null || answer.isEmpty()) {
      writer.write("# Sorry\n\n");
      writer.write("Sorry, we didn't understand * " + query + "*\n");
    } else {
      writer.write("# " + query + "\n\n");
      writer.write(answer.replace("\n", " \\\n") + "\n");
    }

    writer.close();
  }

  public void downloadMarkdown(HttpServletResponse resp) throws IOException {
    createMarkdown();

    resp.setContentType("text/markdown");
    resp.setHeader("Content-disposition", "attachment; filename=" + query + ".md");

    InputStream input = new FileInputStream(tempFile);
    input.transferTo(resp.getOutputStream());

    if (!tempFile.delete()) {
      throw new IOException("DownloadResult.downloadMarkdown: temp.md could not be deleted.");
    }

    tempFile = null;
  }

  public void downloadPDF(HttpServletResponse resp) throws IOException {
    createMarkdown();

    Process process = new ProcessBuilder("pandoc", "-s", "-o", "doc.pdf", "temp.md").start();

    try {
      process.waitFor();
    } catch (InterruptedException e) {
      tempFile.delete();
      throw new IOException("DownloadResult.downloadPDF: could not create pdf.");
    }

    File tempPDF = new File("doc.pdf");

    resp.setContentType("application/pdf");
    resp.setHeader("Content-disposition", "attachment; filename=" + query + ".pdf");

    InputStream input = new FileInputStream(tempPDF);
    input.transferTo(resp.getOutputStream());

    if (!tempFile.delete() && !tempPDF.delete()) {
      throw new IOException("MarkdownResult: temp files could not be deleted.");
    }

    tempFile = null;
  }
}
