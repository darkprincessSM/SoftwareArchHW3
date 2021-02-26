package model.DataTransforming;

import java.text.ParseException;
import java.text.RuleBasedCollator;
import java.util.*;

public class AlphabeticalSorter implements Sorter {

    public ArrayList<String> start(ArrayList<String> stmt) {

        String rules = ("< a < A < b < B < c < C < d < D < e < E < f < F < g"
                + "G < h < H <i < I < j < J < k < K < l < L < m < M < n < N < o < O < "
                + "P < q < Q < r < R < s < S < t < T < u < U < v < V < w < W < x < X <y < Y < z < Z");

        try {
            RuleBasedCollator collator = new RuleBasedCollator(rules);
            Collections.sort(stmt, collator);
        } catch (ParseException pe) {
        }

        System.out.println(stmt);

        return stmt;
    }
}