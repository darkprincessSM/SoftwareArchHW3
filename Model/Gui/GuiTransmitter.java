package model.Gui;

import java.util.ArrayList;
import java.util.Arrays;
import javax.swing.JPanel;
import view.GUI2;
import view.Panel;

public class GuiTransmitter {
    private Starter starter;
    private Panel panel;
    private ArrayList<String> stmt;
    private int priority;

    public void transmitIn(String stringStmt) {
        // Transmit in from GUI
        splitInput(stringStmt);
        starter = new Starter(panel, priority);
        starter.start(stmt);
    }

    public void transmitOut(Panel panel, ArrayList<String> stmt) {
        // transmit out to GUI
        this.panel = panel;
        String exitStmt = makeString(stmt);
        panel.getIntermediateArea().setText(exitStmt);

    }

    public void splitInput(String stringStmt) {
        // splits string to arrayList
        stmt = new ArrayList<>(Arrays.asList(stringStmt.split("(\\s+)(?ms)")));

        for (int i = 0; i < stmt.size(); i++) {
            if (stmt.get(i).length() == 0) {
                stmt.remove(i);
            }
        }
        System.out.println("\nAs Array:\n" + stmt);
    }

    public String makeString(ArrayList<String> stmt) {
        String stringStmt = String.join(" ", stmt);
        return stringStmt;
    }

    public void setPanel(Panel panel) {
        this.panel = panel;
    }

    public void setPriority(int num) {
        priority = num;
    }

    public int getPriority() {
        return priority;
    }
}