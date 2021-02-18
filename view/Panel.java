package view;

import java.awt.Container;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.BorderLayout;
import java.awt.Color;

import javax.swing.JFrame;
import javax.swing.JLabel;
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
        JPanel inputPanel = new JPanel();
        JPanel textPanel = new JPanel();
        JPanel priorityPanel = new JPanel();

        JLabel titleLabel = new JLabel("Team 6: Pipes and Filters");
        cp.add(BorderLayout.NORTH, titlePanel);
        titlePanel.setPreferredSize(new Dimension(400, 200));
        titlePanel.setBackground(Color.lightGray);
        titlePanel.setForeground(Color.black);
        titlePanel.setLayout(new FlowLayout(FlowLayout.LEADING));
        titlePanel.add(titleLabel);

        JLabel inputLabel = new JLabel("Input");
        cp.add(BorderLayout.NORTH, inputPanel);
        inputPanel.setPreferredSize(new Dimension(400, 200));
        inputPanel.setBackground(Color.blue);
        inputPanel.setForeground(Color.black);
        
        inputPanel.add(inputLabel);

        
        

        JLabel middleLabel = new JLabel("Intermediate Output");
        cp.add(BorderLayout.CENTER, textPanel);
        textPanel.setPreferredSize(new Dimension(400, 200));
        textPanel.setBackground(Color.white);
        textPanel.setForeground(Color.black);
        textPanel.add(middleLabel);

        JLabel outputLabel = new JLabel("Final output");
        cp.add(BorderLayout.SOUTH, priorityPanel);
        priorityPanel.setPreferredSize(new Dimension(400, 200));
        priorityPanel.setBackground(Color.magenta);
        priorityPanel.setForeground(Color.black);
        priorityPanel.add(outputLabel);

    }
    
    
}
