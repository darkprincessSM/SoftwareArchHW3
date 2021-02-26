package controller;

import view.Panel;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JRadioButton;
import javax.swing.JTextArea;

import model.Gui.GuiTransmitter;

public class GUIActionListener implements ActionListener {

    private Panel panel;
    // private JTextArea inputArea;
    // private JTextArea intermediateArea;
    // private JTextArea outputArea;
    private Boolean isSort = Boolean.valueOf(false);
    private Boolean isShift = Boolean.valueOf(false);
    private GuiTransmitter guiTransmitter;

    public GUIActionListener(Panel panel) {
        this.panel = panel;
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        Object source = e.getSource();

        if (source == panel.getShiftButton()) {
            System.out.println(panel.getShiftButton().isSelected());
            isSort = false;
            isShift = true;

        } else if (source == panel.getAlphaButton()) {
            System.out.println(panel.getAlphaButton().isSelected());
            isShift = false;
            isSort = true;

        } else if (source == panel.getInputButton()) {
            guiTransmitter = new GuiTransmitter();
            guiTransmitter.setPanel(panel);
            if (isShift) {
                guiTransmitter.setPriority(1);
            } else if (isSort) {
                guiTransmitter.setPriority(2);
            }
            guiTransmitter.transmitIn(panel.getInputArea().getText());
        }

    }

}
