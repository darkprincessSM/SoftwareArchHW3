package model.DataTransforming;

import java.util.*;

public class CircularShifter implements Shifter {
    private ArrayList<String> shiftedStmt = new ArrayList<String>();

    public ArrayList<String> start(ArrayList<String> stmt) {
        String newLine = "";
        String oldLine = "";
        String[] parts;
        for (int i = 0; i < stmt.size(); i++) {// for each line inputted by user
            shiftedStmt.add(stmt.get(i));
            oldLine = stmt.get(i);
            for (int j = 0; j < stmt.get(i).split(" ").length - 1; j++) { // shift line
                parts = oldLine.split(" ");
                for (int k = 1; k < parts.length; k++) {
                    newLine += parts[k] + " ";
                }
                newLine += parts[0];
                shiftedStmt.add(newLine);
                oldLine = newLine;
                newLine = "";
            }
        }

        return shiftedStmt;

    }

}