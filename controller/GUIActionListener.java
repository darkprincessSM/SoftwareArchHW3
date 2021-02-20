package controller;

import view.Panel;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JRadioButton;
import javax.swing.JTextArea;

public class GUIActionListener implements ActionListener {

    private Panel panel;
    private JTextArea inputArea;
    private JTextArea intermediateArea;
    private JTextArea outputArea;
    private Boolean isSort = Boolean.valueOf(false);
    private Boolean isShift = Boolean.valueOf(false);

    public GUIActionListener(Panel panel) {
        this.panel = panel;
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        Object source = e.getSource();
        
        if (source == panel.getShiftButton()) {
            System.out.println("shift boolean");
            isSort = false;    
            isShift = true;                 
                       
        } else if (source == panel.getAlphaButton()) {
            System.out.println("sort boolean");
            isShift = false;    
            isSort = true;  

        } else if (source == panel.getInputButton()) {
            System.out.println("sending to the filters");
            if (isShift) {
                System.out.println("sending to the circular shifter");
            } else if (isSort) {
                System.out.println("sending to be sorted alphabetically");
            }
        }
    
    }
    
}
