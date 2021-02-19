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
        JPanel textPanel = new JPanel(); //for all the jtextareas
        JPanel inputPanel = new JPanel();
        JPanel intermediatePanel = new JPanel();
        JPanel outputPanel = new JPanel();
        JPanel priorityPanel = new JPanel();

        JLabel titleLabel = new JLabel("Team 6: Pipes and Filters");
        cp.add(BorderLayout.NORTH, titlePanel);
        titlePanel.setPreferredSize(new Dimension(400, 50));
        titlePanel.setBackground(Color.lightGray);
        titlePanel.setForeground(Color.black);
        //titlePanel.setLayout(new FlowLayout(FlowLayout.LEADING));
        titlePanel.add(titleLabel);

        cp.add(BorderLayout.CENTER, textPanel);
        textPanel.setPreferredSize(new Dimension(400, 500));
        //textPanel.setLayout(new FlowLayout(FlowLayout.LEADING));

        JLabel inputLabel = new JLabel("Input");
        textPanel.add(BorderLayout.NORTH, inputPanel);
        inputPanel.setPreferredSize(new Dimension(400, 165));
        inputPanel.setBackground(Color.blue);
        inputPanel.setForeground(Color.black);
        //inputPanel.setLayout(new FlowLayout(FlowLayout.LEADING));
        inputPanel.add(inputLabel);

        JLabel middleLabel = new JLabel("Intermediate Output");
        textPanel.add(BorderLayout.CENTER, intermediatePanel);
        intermediatePanel.setPreferredSize(new Dimension(400, 165));
        intermediatePanel.setBackground(Color.white);
        intermediatePanel.setForeground(Color.black);
        //intermediatePanel.setLayout(new FlowLayout(FlowLayout.LEADING));
        intermediatePanel.add(middleLabel);

        JLabel outputLabel = new JLabel("Final output");
        textPanel.add(BorderLayout.SOUTH, outputPanel);
        outputPanel.setPreferredSize(new Dimension(400, 165));
        outputPanel.setBackground(Color.green);
        outputPanel.setForeground(Color.black);
        //outputPanel.setLayout(new FlowLayout(FlowLayout.LEADING));
        outputPanel.add(outputLabel);

        JLabel priorityLabel = new JLabel("Priority");
        cp.add(BorderLayout.SOUTH, priorityPanel);
        priorityPanel.setPreferredSize(new Dimension(400, 100));
        priorityPanel.setBackground(Color.magenta);
        priorityPanel.setForeground(Color.black);
        priorityPanel.add(priorityLabel);

    }
    
    
}
