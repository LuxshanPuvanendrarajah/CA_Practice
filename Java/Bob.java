public class Bob {
    public String hey(String s) {
        String clean = s.trim().replaceAll("[,']", "");
        if(clean.length() > 0) {
            char lastChar = clean.trim().charAt(clean.length()-1);
            if(clean == clean.toUpperCase() && lastChar == '?' && clean.matches("[A-Z ?]+")) {
                return "Calm down, I know what I'm doing!";
            } else if(lastChar == '?') {
                return "Sure.";
            } else if(clean == clean.toUpperCase() && !Character.isDigit(lastChar)) {
                return "Whoa, chill out!";
            } else {
                return "Whatever.";
            }
        }
        return "Fine. Be that way!";
    }
}