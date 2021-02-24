package model.Gui;

import java.util.ArrayList;

import model.DataTransforming.*;
import model.Outputting.*;
import view.Panel;

public class Transmitter {
    private GuiTransmitter guiTransmitter = new GuiTransmitter();
    private Sorter alphabetSort = new AlphabeticalSorter();
    private Shifter circularShifter = new CircularShifter();
    private Output outputResult = new OutputResult();
    private int priority;
    private Panel panel;

    public Transmitter(Panel panel, int priority) {
        this.priority = priority;
        this.panel = panel;
        // if 1 sorter, 2 shifter
    }

    public void transmit(ArrayList<String> stmt) {
        if (priority == 1) {
            ArrayList<String> sortedArray = new ArrayList<String>();
            System.out.println("Going to Sorter");
            sortedArray = alphabetSort.start(stmt);
            System.out.println("Sorted Array: " + sortedArray);
            guiTransmitter.transmitOut(panel, sortedArray);
        } else if (priority == 2) {

            System.out.println("Shifter");

        }
    }
}
