package ic.doc;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

public class QueryProcessorTest {

    QueryProcessor queryProcessor = new QueryProcessor();

    @Test
    public void returnsEmptyStringIfCannotProcessQuery() throws Exception {
        assertThat(queryProcessor.process("test"), is(""));
    }

    @Test
    public void knowsAboutShakespeare() throws Exception {
        assertThat(queryProcessor.process("Shakespeare"), containsString("playwright"));
    }

    @Test
    public void knowsAboutAsimov() throws Exception {
        assertThat(queryProcessor.process("Asimov"), containsString("science fiction"));
    }
    
    @Test
    public void knowsAboutMark() throws Exception {
        assertThat(queryProcessor.process("mark"), containsString("PintOS"));
    }
    
    @Test
    public void knowsAboutApples() throws Exception {
        assertThat(queryProcessor.process("apple"), containsString("fruit"));
    }

    @Test
    public void isNotCaseSensitive() throws Exception {
        assertThat(queryProcessor.process("shakespeare"), containsString("playwright"));
    }

    /*
    // Failing test to check if the pipleline will fail when included
    @Test
    public void failingTest() throws Exception {
        assertThat(queryProcessor.process("shakespeare"), containsString("iphone"));
    }
    */
    
}
