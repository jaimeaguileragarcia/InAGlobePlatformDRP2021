package ic.doc;

public class QueryProcessor {

    public String process(String query) {
        StringBuilder results = new StringBuilder();
        if (query.toLowerCase().contains("shakespeare")) {
            results.append("William Shakespeare (26 April 1564 - 23 April 1616) was an\n" +
                           "English poet, playwright, and actor, widely regarded as the greatest\n" +
                           "writer in the English language and the world's pre-eminent dramatist. \n");
            results.append(System.lineSeparator());
        }

        if (query.toLowerCase().contains("asimov")) {
            results.append("Isaac Asimov (2 January 1920 - 6 April 1992) was an\n" +
                           "American writer and professor of Biochemistry, famous for\n" +
                           "his works of hard science fiction and popular science. \n");
            results.append(System.lineSeparator());
        }
        
        if (query.toLowerCase().contains("apple")) {
            results.append("An apple is an edible fruit produced by \n" +
                           "an apple tree (Malus domestica).\n" +
                           "Not to be confused with the technology company Apple. \n");
            results.append(System.lineSeparator());
        }
        
        
        if (query.toLowerCase().contains("mark")) {
            results.append("Mark Wheelhouse saved\n" +
                           "countless desperate Imperial Computing 2nd years \n" +
                           "during the great PintOS Depression. \n");
            results.append(System.lineSeparator());
        }
        return results.toString();
    }
}
