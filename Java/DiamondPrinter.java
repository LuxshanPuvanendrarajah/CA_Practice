import java.util.ArrayList;
import java.util.List;

class DiamondPrinter {
        
    private static final char START_CHAR = 'A';
        
            List<String> printToList(char endChar) {
            List<String> result = new ArrayList<>();
    
            for (char a = START_CHAR; a < endChar; a++) {
                result.add(getLine(a, endChar));
            }
    
            for (char a = endChar; a >= START_CHAR; a--) {
                result.add(getLine(a, endChar));
            }
            return result;
            }
            
            private String getLine(char a, char endChar) {
            int lineLength = (endChar - START_CHAR) * 2 + 1;
            char[] line = new char[lineLength];
            for (int i = 0; i < lineLength; i++) {
                line[i] = ' ';
            }
            line[endChar - a] = a;
            line[endChar + a - 2 * START_CHAR] = a;
            return String.valueOf(line);
        
    }
}
    
    



