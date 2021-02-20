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
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.border.LineBorder;

public class Panel {
    
    private JFrame window;

    private JTextArea inputArea = new JTextArea();
    private JTextArea intermediateArea = new JTextArea();
    private JTextArea outputArea = new JTextArea();

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
        titlePanel.setPreferredSize(new Dimension(400, 60));
        titlePanel.setBackground(Color.lightGray);
        titlePanel.setForeground(Color.black);
        //titlePanel.setLayout(new FlowLayout(FlowLayout.LEADING));
        titlePanel.add(titleLabel);

        cp.add(BorderLayout.CENTER, textPanel);
        textPanel.setPreferredSize(new Dimension(400, 450));
        //textPanel.setLayout(new FlowLayout(FlowLayout.LEADING));

        JLabel inputLabel = new JLabel("Input");
        textPanel.add(BorderLayout.NORTH, inputPanel);
        inputPanel.add(BorderLayout.NORTH, inputLabel);
        inputPanel.add(BorderLayout.SOUTH, inputArea);
        JScrollPane inputScrollPane = new JScrollPane(inputArea);
        inputPanel.add(inputScrollPane);
        inputArea.setEditable(true);
        inputArea.setLineWrap(true);
        //inputArea.setBorder(new LineBorder(Color.black, 1));
        inputScrollPane.setBorder(new LineBorder(Color.black, 1));
        inputScrollPane.setPreferredSize(new Dimension(150, 100));
        inputPanel.setPreferredSize(new Dimension(400, 150));
        inputPanel.setBackground(Color.lightGray);
        inputPanel.setForeground(Color.black);

        JLabel intermediateLabel = new JLabel("Intermediate Output");
        textPanel.add(BorderLayout.CENTER, intermediatePanel);
        intermediatePanel.add(BorderLayout.NORTH, intermediateLabel);
        intermediatePanel.add(BorderLayout.SOUTH, intermediateArea);
        JScrollPane intermediateScrollPane = new JScrollPane(intermediateArea);
        intermediatePanel.add(intermediateScrollPane);
        inputArea.setEditable(false);
        inputArea.setLineWrap(true);
        intermediateScrollPane.setBorder(new LineBorder(Color.black, 1));
        intermediateScrollPane.setPreferredSize(new Dimension(150, 100));
        intermediatePanel.setPreferredSize(new Dimension(400, 150));
        intermediatePanel.setBackground(Color.lightGray);
        intermediatePanel.setForeground(Color.black);

        JLabel outputLabel = new JLabel("Final output");
        textPanel.add(BorderLayout.SOUTH, outputPanel);
        outputPanel.add(outputLabel);
        outputPanel.add(outputArea);
        outputPanel.setPreferredSize(new Dimension(400, 150));
        outputPanel.setBackground(Color.lightGray);
        outputPanel.setForeground(Color.black);        
        JScrollPane outputScrollPane = new JScrollPane(outputArea);
        outputPanel.add(BorderLayout.SOUTH, outputScrollPane);
        outputScrollPane.setBorder(new LineBorder(Color.black, 1));
        outputScrollPane.setPreferredSize(new Dimension(150, 100));

        JLabel priorityLabel = new JLabel("Priority");
        cp.add(BorderLayout.SOUTH, priorityPanel);
        priorityPanel.setPreferredSize(new Dimension(400, 100));
        priorityPanel.setBackground(Color.gray);
        priorityPanel.setForeground(Color.black);
        priorityPanel.add(priorityLabel);

    }
    
    
}
