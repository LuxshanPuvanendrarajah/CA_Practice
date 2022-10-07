public class BeerSong {
    public String sing(int beers, int verse) {
        String sing = "";
        for (int i = 0; i < verse; i++, beers--) {
            if (beers == 0) {
                sing += "No more bottles of beer on the wall, no more bottles of beer.\n" +
                        "Go to the store and buy some more, 99 bottles of beer on the wall.\n\n";
            } else if (beers == 1) {
                sing += beers + " bottle of beer on the wall, " +
                        beers + " bottle of beer.\n" +
                        "Take it down and pass it around, no more bottles of beer on the wall.\n\n";
            } else if (beers == 2) {
                sing += beers + " bottles of beer on the wall, " +
                        beers + " bottles of beer.\n" +
                        "Take one down and pass it around, " +
                        (beers - 1) + " bottle of beer on the wall.\n\n";
            } else {
                sing += beers + " bottles of beer on the wall, " +
                        beers + " bottles of beer.\n" +
                        "Take one down and pass it around, " +
                        (beers - 1) + " bottles of beer on the wall.\n\n";
            }
        }
        return sing;
    }
    public String singSong() {
        return sing(99,100);
    }
}
