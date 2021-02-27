package model.Transforming;

import java.text.ParseException;
import java.text.RuleBasedCollator;
import java.util.*;

public class AlphabeticalSorter implements Transformer {

    public ArrayList<String> start(ArrayList<String> stmt) {
        String rules = ("<'a '< a < 'A '< A < 'b ' < b < 'B ' < B < 'c ' < c < 'C ' < C < 'd ' < d < 'D ' < D < 'e ' < e < 'E ' < E < 'f ' < f < 'F ' < F < 'g ' < g < 'G ' < G < 'h ' < h "
                + "< 'H ' < H < 'i ' < i < 'I ' < I < 'j ' < j < 'J ' < J < 'k ' < k < 'K ' < K < 'l ' < l < 'L ' < L < 'm ' < m < 'M '< M < 'n ' < n < 'N ' < N < 'o ' < o < 'O ' < O "
                + "< 'p ' < p < 'P ' < P < 'q ' < q < 'Q ' < Q < 'r ' < r < 'R ' < R < 's ' < s < 'S ' < S < 't ' < t < 'T ' < T < 'u ' < u < 'U ' < U < 'v ' < v < 'V ' < V < 'w ' < w"
                + "< 'W ' < W < 'x ' < x < 'X ' < X < 'y ' < y < 'Y ' < Y < 'z ' < z < 'Z ' < Z");

        try {
            RuleBasedCollator collator = new RuleBasedCollator(rules);
            Collections.sort(stmt, collator);
        } catch (ParseException pe) {
        }

        return stmt;
    }

    @Override
    public void setFinished(boolean bool) {
    }
}