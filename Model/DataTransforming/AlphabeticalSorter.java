package model.DataTransforming;

import java.text.Collator;
import java.text.ParseException;
import java.text.RuleBasedCollator;
import java.util.*;

public class AlphabeticalSorter implements Sorter {

    public ArrayList<String> start(ArrayList<String> stmt) {

        String rules = ("< a, A < b, B < c, C < d, D < e,E < f,F " + "< g,G < h,H < i,I < j,J < k,K < l,L "
                + "< m,M < n,N < o,O < p,P < q,Q < r, R < s,S < t,T < u,U < v,V < w,W < x,X  < y,Y < z,Z");
        stmt.sort(Comparator.comparing(String::length).thenComparing(String::compareToIgnoreCase));
        System.out.println(stmt + " length");
        try {
            RuleBasedCollator collator = new RuleBasedCollator(rules);

            Collections.sort(stmt, collator);
            Collections.sort(stmt, collator);
            System.out.println(stmt);

        } catch (ParseException pe) {
        }
        // stmt.sort(Comparator.comparing(String::length).thenComparing(String::compareToIgnoreCase));

        return stmt;
    }

    public static void sortStrings(Collator collator, ArrayList<String> stmt) {
        String tmp;
        for (int i = 0; i < stmt.size(); i++) {
            for (int j = i + 1; j < stmt.size() - 1; j++) {
                if (collator.compare(stmt.get(i), stmt.get(j)) > 0) {
                    tmp = stmt.get(i);
                    stmt.set(i, stmt.get(j));
                    stmt.set(j, tmp);
                    // if(i == stmt)
                }
            }
        }
    }
}