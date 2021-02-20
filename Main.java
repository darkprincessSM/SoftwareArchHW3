import java.awt.Dimension;
import javax.swing.JFrame;

import Gui.Gui;

public class Main {
    public static void main(String[] args) {
        JFrame window = new JFrame();
        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        window.setLocation(500, 200);
        window.setPreferredSize(new Dimension(700, 200));
        window.setResizable(false);
        var gui = new Gui(window);
        gui.startGui();
        window.pack();
        window.setVisible(true);
    }
}
