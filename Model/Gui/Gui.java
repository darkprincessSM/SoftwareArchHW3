package Gui;

import javax.swing.JFrame;
import javax.swing.JRadioButton;
import javax.swing.JTextField;

public class Gui {
    private GuiTransmitter guiTransmitter;
    private JFrame window;
    private JTextField input;
    private JTextField midOutput;
    private JTextField finalOutput;
    private JRadioButton radioButton;

    public Gui(JFrame window) {
        this.window = window;
    }

    public void startGui() {
        // gui stuff goes here
        // priority is the info gotten from radio button

        // get inputSmt(string) and uses it to initialize GuiTransmitter
        String inputStmt = "";
        guiTransmitter = new GuiTransmitter(inputStmt);
        guiTransmitter.setWindow(window);
        guiTransmitter.transmit();
    }

    public JTextField getFinalOutput() {
        return finalOutput;
    }

    public JTextField getMidOutput() {
        return midOutput;
    }

    public JTextField getInput() {
        return input;
    }

    public JRadioButton getRadioButton() {
        return radioButton;
    }
}