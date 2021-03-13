package model.Gui;

import java.util.ArrayList;
import java.util.Arrays;
import view.Panel;

public class GuiReceiver {
    private Starter starter;
    private Panel panel;
    private ArrayList<String> stmt;
    private int priority = 1;
    private boolean finished;

    public void transmitIn(String stringStmt) {
        // Transmit in from GUI
        splitInput(stringStmt);
        System.out.println(priority);
        starter = new Starter(panel, priority);
        starter.start(stmt);
    }

    public void transmitOut(Panel panel, ArrayList<String> stmt) {
        // transmit out to GUI
        this.panel = panel;
        String exitStmt = makeString(stmt);
        // checking if its mid or final output
        if (finished == false) {
            panel.getIntermediateArea().setText(exitStmt);
        } else if (finished == true) {
            panel.getOutputArea().setText(exitStmt);
        }
    }

    public void splitInput(String stringStmt) {
        stmt = new ArrayList<>(Arrays.asList(stringStmt.split("\\r?\\n|\\r")));
    }

    public String makeString(ArrayList<String> stmt) {
        String stringStmt = String.join("\n", stmt);
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

    public void setFinished(boolean finished) {
        this.finished = finished;
    }
}