package view;

import controller.GUIActionListener;

import java.awt.Container;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.Window;
import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Component;

import javax.swing.BorderFactory;
import javax.swing.Box;
import javax.swing.BoxLayout;
import javax.swing.ButtonGroup;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
import javax.swing.JButton;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.border.BevelBorder;
import javax.swing.border.Border;
import javax.swing.border.LineBorder;
import javax.swing.border.TitledBorder;

public class Panel {

    private JFrame window;

    private JTextArea inputArea = new JTextArea(5, 10);
    private JTextArea intermediateArea = new JTextArea();
    private JTextArea outputArea = new JTextArea();

    private JRadioButton alphaButton = new JRadioButton("Alphabetical Sort");
    private JRadioButton shiftButton = new JRadioButton("Circular Shift");

    private JButton inputButton = new JButton("Enter");

    public Panel(JFrame window) {
        this.window = window;
    }

    public void init() {
        Container cp = window.getContentPane();

        JPanel titlePanel = new JPanel();
        JPanel textPanel = new JPanel(); // for all the jtextareas
        JPanel inputPanel = new JPanel();
        JPanel intermediatePanel = new JPanel();
        JPanel outputPanel = new JPanel();
        JPanel priorityPanel = new JPanel();

        JLabel titleLabel = new JLabel("Team 6: Pipes and Filters");
        cp.add(BorderLayout.NORTH, titlePanel);
        titlePanel.setPreferredSize(new Dimension(350, 50));
        titlePanel.setBackground(Color.lightGray);
        titlePanel.setForeground(Color.black);
        titlePanel.add(titleLabel);

        cp.add(BorderLayout.CENTER, textPanel); // text panel consists of each indiv. text panel
        textPanel.setPreferredSize(new Dimension(350, 450));
        textPanel.setLayout(new BorderLayout());

        Border loweredbeveled = BorderFactory.createBevelBorder(BevelBorder.LOWERED);
        GUIActionListener listener = new GUIActionListener(this);

        // area for entering input phrases
        JLabel inputLabel = new JLabel(" Input");
        textPanel.add(inputPanel, BorderLayout.NORTH);
        inputPanel.setLayout(new BorderLayout());
        inputPanel.setPreferredSize(new Dimension(350, 150));
        inputPanel.add(inputLabel, BorderLayout.NORTH);
        inputPanel.add(inputArea, BorderLayout.CENTER);
        inputPanel.setBackground(Color.lightGray);
        inputPanel.setForeground(Color.black);
        JScrollPane inputScrollPane = new JScrollPane(inputArea);
        inputPanel.add(inputScrollPane);
        inputArea.setEditable(true);
        inputArea.setLineWrap(true);
        Border inputBorder = BorderFactory.createBevelBorder(BevelBorder.LOWERED);
        inputScrollPane.setBorder(inputBorder);
        inputScrollPane.setPreferredSize(new Dimension(200, 100));
        inputPanel.add(inputButton, BorderLayout.SOUTH);
    
        inputButton.addActionListener(listener);

        // displaying the middle step        
        intermediatePanel.setLayout(new BorderLayout());
        JLabel intermediateLabel = new JLabel(" Second Step");
        textPanel.add(intermediatePanel, BorderLayout.CENTER);
        intermediatePanel.setPreferredSize(new Dimension(350, 150));
        intermediatePanel.add(intermediateLabel, BorderLayout.NORTH);
        intermediatePanel.add(intermediateArea, BorderLayout.CENTER);
        intermediatePanel.setBackground(Color.lightGray);
        intermediatePanel.setForeground(Color.black);
        JScrollPane intermediateScrollPane = new JScrollPane(intermediateArea);
        intermediatePanel.add(intermediateScrollPane);
        intermediateArea.setEditable(false);
        intermediateArea.setLineWrap(true);
        Border intermediateBorder = BorderFactory.createBevelBorder(BevelBorder.LOWERED);
        intermediateScrollPane.setBorder(intermediateBorder);
        intermediateScrollPane.setPreferredSize(new Dimension(200, 100));

        // displaying the output
        Border outputBorder = BorderFactory.createBevelBorder(BevelBorder.LOWERED);
        outputPanel.setLayout(new BorderLayout());
        JLabel outputLabel = new JLabel(" Final output");
        textPanel.add(outputPanel, BorderLayout.SOUTH);
        outputPanel.setPreferredSize(new Dimension(350, 150));
        outputPanel.add(outputLabel, BorderLayout.NORTH);
        outputPanel.add(outputArea, BorderLayout.CENTER);        
        outputPanel.setBackground(Color.lightGray);
        outputPanel.setForeground(Color.black);
        JScrollPane outputScrollPane = new JScrollPane(outputArea);
        outputPanel.add(outputScrollPane);
        outputArea.setEditable(false);
        outputArea.setLineWrap(true);
        outputScrollPane.setBorder(outputBorder);
        outputScrollPane.setPreferredSize(new Dimension(200, 100));

        // for setting priority
        cp.add(BorderLayout.SOUTH, priorityPanel);
        ButtonGroup priorityGroup = new ButtonGroup();
        priorityGroup.add(shiftButton);
        priorityGroup.add(alphaButton);
        //JLabel priorityLabel = new JLabel("Priority");
        //priorityLabel.setForeground(Color.black);
        
        TitledBorder titledPriorityBorder;
        titledPriorityBorder = BorderFactory.createTitledBorder(loweredbeveled, "Priority");
        titledPriorityBorder.setTitleJustification(TitledBorder.LEFT);
        titledPriorityBorder.setTitleColor(Color.black);
        
        priorityPanel.setBorder(titledPriorityBorder);
        priorityPanel.setPreferredSize(new Dimension(350, 60));
        //priorityPanel.setBorder(new LineBorder(Color.darkGray, 1));
        priorityPanel.setBackground(Color.gray);
        priorityPanel.setForeground(Color.white);
        //priorityPanel.add(priorityLabel);
        priorityPanel.add(shiftButton);
        priorityPanel.add(alphaButton);
        shiftButton.setBackground(Color.gray);
        shiftButton.setForeground(Color.black);
        shiftButton.addActionListener(listener);
        alphaButton.setBackground(Color.gray);
        alphaButton.setForeground(Color.black);
        alphaButton.addActionListener(listener);

    }

    public JButton getInputButton() {
        return inputButton;
    }

    public JRadioButton getAlphaButton() {
        return alphaButton;
    }
    
    public JRadioButton getShiftButton() {
        return shiftButton;
    }

    // public static void textPanelSetup(Border borderName, Panel panelName, JLabel labelName, JScrollPane scrollName, JTextArea areaName) {
    //     borderName = BorderFactory.createBevelBorder(BevelBorder.LOWERED);
    //     panelName.setLayout(new FlowLayout());
    //     JLabel labelName = new JLabel("Second Step");
    //     textPanel.add(panelName);
    //     panelName.setPreferredSize(new Dimension(350, 150));
    //     panelName.add(labelName);
    //     panelName.add(intermediateArea);
    //     panelName.setBackground(Color.lightGray);
    //     panelName.setForeground(Color.black);
    //     JScrollPane scrollName = new JScrollPane(areaName);
    //     panelName.add(scrollName);
    //     areaName.setEditable(false);
    //     areaName.setLineWrap(true);
    //     scrollName.setBorder(borderName);
    //     scrollName.setPreferredSize(new Dimension(200, 100));
    // }    
    
}
