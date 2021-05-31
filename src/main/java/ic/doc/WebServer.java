package ic.doc;

import ic.doc.web.HTMLResultPage;
import ic.doc.web.IndexPage;
import ic.doc.web.DownloadResult;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.ServletHandler;
import org.eclipse.jetty.servlet.ServletHolder;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class WebServer {

  public WebServer() throws Exception {
    Server server = new Server(Integer.valueOf(System.getenv("PORT")));

    ServletHandler handler = new ServletHandler();
    handler.addServletWithMapping(new ServletHolder(new Website()), "/*");
    server.setHandler(handler);

    server.start();
  }

  public static void main(String[] args) throws Exception {
    new WebServer();
  }

  static class Website extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
      String query = req.getParameter("q");
      if (query == null) {
        new IndexPage().writeTo(resp);
      } else if (req.getParameter("output").equals("Markdown")) {
        new DownloadResult(query, new QueryProcessor().process(query)).downloadMarkdown(resp);
      } else if (req.getParameter("output").equals("PDF")) {
        new DownloadResult(query, new QueryProcessor().process(query)).downloadPDF(resp);
      } else {
        new HTMLResultPage(query, new QueryProcessor().process(query)).writeTo(resp);
      }
    }
  }
}

