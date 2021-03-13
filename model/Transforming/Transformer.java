package model.Transforming;

import java.util.ArrayList;

public interface Transformer {

    public ArrayList<String> start(ArrayList<String> stmt);

    public void setFinished(boolean bool);
}
