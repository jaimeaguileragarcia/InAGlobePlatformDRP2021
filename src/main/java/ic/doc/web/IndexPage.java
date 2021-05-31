package ic.doc.web;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class IndexPage implements Page {

  public void writeTo(HttpServletResponse resp) throws IOException {
    resp.setContentType("text/html");
    PrintWriter writer = resp.getWriter();

    // Header
    writer.println("<html>");
    writer.println("<head><title>Welcome</title></head>");
    writer.println("<body>");

    // Content
    writer.println(
        "<h1>Welcome!!</h1>" +
            "<p>Enter your amazing query in the box below: " +
            "<form>" +
            "<input type=\"text\" name=\"q\" />" +
            "<br><br><input type=\"radio\" id=\"HTML\" " +
            "checked=\"checked\" name=\"output\" value=\"HTML\">" +
            "<label for=\"HTML\">HTML</label>" +
            "<br><input type=\"radio\" id=\"Markdown\" " +
            "name=\"output\" value=\"Markdown\">" +
            "<label for=\"Markdown\">Download Markdown</label>" +
            "<br><input type=\"radio\" id=\"PDF\" " +
            "name=\"output\" value=\"PDF\">" +
            "<label for=\"PDF\">Download PDF</label>" +
            "<br><br><input type=\"submit\">" +
            "</form>" +
            "</p>");

    // Footer
    writer.println("</body>");
    writer.println("</html>");
  }

}
