package Model.Gui;

import java.util.*;
import javax.swing.JFrame;

import view.GUI2;
import view.Panel;

public class GuiTransmitter extends Transmitter {
    private Starter starter;
    private Panel panel;
    private ArrayList<String> stmt;
    private int priority;
    private String inputStmt;

    public GuiTransmitter(String inputStmt) {
        this.inputStmt = inputStmt;
    }

    public void transmit() {
        splitInput(inputStmt);
        starter = new Starter();
        // send to Starter

    }

    public void splitInput(String inputStmt) {
        // string to arrayList
        stmt = new ArrayList<>(Arrays.asList(inputStmt.split("(\\s+)(?ms)")));

        for (int i = 0; i < stmt.size(); i++) {
            if (stmt.get(i).length() == 0) {
                stmt.remove(i);
            }
        }
        System.out.println("\nAs Array:\n" + stmt);
        System.out.println(priority);

    }

    public void setPriority(int num) {
        priority = num;
    }

    public void setStmt(ArrayList<String> stmt) {
        this.stmt = stmt;
    }

    public void setPanel(Panel panel) {
        this.panel = panel;
    }

}