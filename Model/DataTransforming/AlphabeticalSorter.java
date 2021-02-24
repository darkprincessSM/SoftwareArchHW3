package model.DataTransforming;

import java.text.Collator;
import java.util.*;

public class AlphabeticalSorter implements Sorter {

    public ArrayList<String> start(ArrayList<String> stmt) {
        Collections.sort(stmt, Collator.getInstance(Locale.ENGLISH));
        return stmt;
    }

}