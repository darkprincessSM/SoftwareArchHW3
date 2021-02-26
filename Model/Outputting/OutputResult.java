package model.Outputting;

import java.util.*;

import model.Gui.*;
import view.Panel;

public class OutputResult implements Output {

    private boolean finished;
    private Panel panel;

    public OutputResult(Panel panel) {
        this.panel = panel;
    }

    public void start(ArrayList<String> stmt) {

        GuiReceiver guiReceiver = new GuiReceiver();
        guiReceiver.setPanel(panel);
        guiReceiver.setFinished(finished);
        guiReceiver.transmitOut(panel, stmt);
    }

    public void setFinished(boolean finished) {
        this.finished = finished;
    }

}