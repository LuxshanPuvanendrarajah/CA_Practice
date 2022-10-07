public class PangramChecker {
    private final static int PanAlphabet = 26;

    public boolean isPangram(String input) {
        return input.toLowerCase().chars().filter(Character::isAlphabetic).distinct().count() == PanAlphabet;
       
    }

}
