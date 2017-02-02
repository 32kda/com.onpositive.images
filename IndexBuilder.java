import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;

import com.google.common.io.Files;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

public class IndexBuilder {

	public static void main(String[] args) {
		File dir = new File("d:/tmp/images/com.onpositive.images/");
		File[] folders = dir.listFiles(f -> (f.isDirectory() && !f.getName().startsWith(".")));
		GsonBuilder builder = new GsonBuilder();
		Gson gson = builder.create();
		JsonArray topArray = new JsonArray();
		for (File folder : folders) {
			File[] children = folder.listFiles(f -> f.isFile());
			if (children.length > 0) {
				JsonArray images = new JsonArray();
				for (File imageFile : children) {
					images.add(imageFile.getName());
				}
				JsonObject object = new JsonObject();
				object.add(folder.getName(), images);
				topArray.add(object);
			}
		}
		String jsonStr = gson.toJson(topArray);
		try {
			Files.write(jsonStr,new File(dir,"index.json"), Charset.defaultCharset());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}