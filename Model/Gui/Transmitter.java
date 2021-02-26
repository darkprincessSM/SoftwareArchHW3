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
    }

    public void transmit(ArrayList<String> stmt) {
        ArrayList<String> sortedArray = new ArrayList<String>();
        ArrayList<String> shiftedArray = new ArrayList<String>();
        // 1 = Shifter first, 2 = Sorter first
        if (priority == 1) {
            System.out.println("Shifter");
            shiftedArray = circularShifter.start(stmt);
            guiTransmitter.transmitOut(panel, shiftedArray);
        } else if (priority == 2) {
            sortedArray = alphabetSort.start(stmt);
            guiTransmitter.transmitOut(panel, sortedArray);
            circularShifter.start(sortedArray);
        }
    }
}
