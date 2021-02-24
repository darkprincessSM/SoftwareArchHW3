package model.Gui;

import java.util.*;

import view.Panel;

public class Starter {
    private Transmitter transmitter;
    private int priority;
    private Panel panel;

    public Starter(Panel panel, int priority) {
        this.priority = priority;
        this.panel = panel;
    }

    public void start(ArrayList<String> stmt) {
        System.out.println("In the Starter");
        transmitter = new Transmitter(panel, priority);
        transmitter.transmit(stmt);
    }

}