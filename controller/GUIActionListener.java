package controller;

import view.Panel;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JRadioButton;
import javax.swing.JTextArea;

import model.Gui.*;

public class GUIActionListener implements ActionListener {

    private Panel panel;
    // private JTextArea inputArea;
    // private JTextArea intermediateArea;
    // private JTextArea outputArea;
    private Boolean isSort = Boolean.valueOf(false);
    private Boolean isShift = Boolean.valueOf(false);
    private GuiReceiver guiReceiver;

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
            guiReceiver = new GuiReceiver();
            guiReceiver.setPanel(panel);
            if (isShift) {
                guiReceiver.setPriority(1);
            } else if (isSort) {
                guiReceiver.setPriority(2);
            }
            guiReceiver.transmitIn(panel.getInputArea().getText());
        } else if (source == panel.getClearButton()) {
            panel.getInputArea().setText("");
            panel.getIntermediateArea().setText("");
            panel.getOutputArea().setText("");
        }

    }

}
