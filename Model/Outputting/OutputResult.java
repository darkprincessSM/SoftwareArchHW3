package model.Outputting;

import java.util.*;

import model.Gui.GuiTransmitter;
import view.Panel;

public class OutputResult implements Output {

    private boolean finished;
    private Panel panel;

    public OutputResult(Panel panel) {
        this.panel = panel;
    }

    public void start(ArrayList<String> stmt) {

        GuiTransmitter guiTransmitter = new GuiTransmitter();
        guiTransmitter.setPanel(panel);
        guiTransmitter.setFinished(finished);
        guiTransmitter.transmitOut(panel, stmt);
    }

    public void setFinished(boolean finished) {
        this.finished = finished;
    }

}