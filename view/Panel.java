package view;

import java.awt.Container;
import java.awt.Dimension;
import java.awt.BorderLayout;
import java.awt.Color;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
import javax.swing.JTextArea;

public class Panel {
    
    private JFrame window;

    private JTextArea inputArea;
    private JTextArea secondInputArea;
    private JTextArea outputArea;

    private JRadioButton alphaButton = new JRadioButton("Alphabatize");
    private JRadioButton shiftButton = new JRadioButton("Circular Shift");

    public Panel(JFrame window) {
        this.window = window;
    }

    public void init(){
        Container cp = window.getContentPane();

        JPanel titlePanel = new JPanel();
        JPanel textJPanel = new JPanel();
        JPanel priorityPanel = new JPanel();

        cp.add(BorderLayout.NORTH, titlePanel);
        titlePanel.setPreferredSize(new Dimension(300, 200));
        titlePanel.setBackground(Color.lightGray);
        titlePanel.setForeground(Color.black);

        cp.add(BorderLayout.CENTER, textJPanel);


        cp.add(BorderLayout.SOUTH, priorityPanel);


    }
    
    
}
