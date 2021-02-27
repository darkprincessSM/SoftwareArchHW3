package model.Outputting;

import java.util.*;

import model.Gui.*;
import model.Transforming.Transformer;
import view.Panel;

public class OutputResult implements Transformer {

    private boolean finished;
    private Panel panel;

    public OutputResult(Panel panel) {
        this.panel = panel;
    }

    public ArrayList<String> start(ArrayList<String> stmt) {

        GuiReceiver guiReceiver = new GuiReceiver();
        guiReceiver.setPanel(panel);
        guiReceiver.setFinished(finished);
        guiReceiver.transmitOut(panel, stmt);
        return null;
    }

    public void setFinished(boolean finished) {
        this.finished = finished;
    }

}