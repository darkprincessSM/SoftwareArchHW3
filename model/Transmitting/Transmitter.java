package model.Transmitting;

import java.util.ArrayList;
import model.Outputting.*;
import model.Transforming.*;
import view.Panel;

public class Transmitter {
    private Transformer alphabetSort = new AlphabeticalSorter();
    private Transformer circularShifter = new CircularShifter();
    private int priority;
    private Panel panel;

    public Transmitter(Panel panel, int priority) {
        this.priority = priority;
        this.panel = panel;
    }

    public void transmit(ArrayList<String> stmt) {
        Transformer outputResult = new OutputResult(panel);
        ArrayList<String> sortedArray = new ArrayList<String>();
        ArrayList<String> shiftedArray = new ArrayList<String>();

        if (priority == 1) { // Shifter first
            // mid output
            shiftedArray = circularShifter.start(stmt);
            outputResult.setFinished(false);
            outputResult.start(shiftedArray);
            // final output
            sortedArray = alphabetSort.start(shiftedArray);
            outputResult.setFinished(true);
            outputResult.start(sortedArray);
        } else if (priority == 2) { // Sorter first
            // mid output
            sortedArray = alphabetSort.start(stmt);
            outputResult.setFinished(false);
            outputResult.start(sortedArray);

            // final output
            shiftedArray = circularShifter.start(sortedArray);
            outputResult.setFinished(true);
            outputResult.start(shiftedArray);
        }
    }
}
