package Gui;

import java.util.*;
import javax.swing.JFrame;

public class GuiTransmitter extends Transmitter {
    private Starter starter;
    private Gui gui;
    private ArrayList<String> stmt;
    private int priority = 0;
    private String inputStmt;
    private JFrame window;

    public GuiTransmitter(String inputStmt) {
        this.inputStmt = inputStmt;
    }

    public void transmit() {
        splitInput(inputStmt);

    }

    public void splitInput(String list) {
        // string to arrayList
    }

    public void setPriority(int num) {
        priority = num;
    }

    public void setStmt(ArrayList<String> stmt) {
        this.stmt = stmt;
    }

    public void setWindow(JFrame window) {
        this.window = window;
    }

}