#include <WString.h>
#include <Arduino.h>

int getItemCount(String str, char delimiter)
{
    int count = 0;
    int endIndex = str.indexOf(delimiter);

    if(endIndex > -1) {
        count = 1;
    }

    while (endIndex != -1)
    {
        count++;
        endIndex = str.indexOf(delimiter, endIndex + 1);
    }

    Serial.println();

    return count;
}

String getItem(String str, char delimiter, int index)
{
    int found = 0;
    int strIndex[] = {0, -1};
    int maxIndex = str.length() - 1;

    for (int i = 0; i <= maxIndex && found <= index; i++)
    {
        if (str.charAt(i) == delimiter || i == maxIndex)
        {
            found++;
            strIndex[0] = strIndex[1] + 1;
            strIndex[1] = (i == maxIndex) ? i + 1 : i;
        }
    }

    return found > index ? str.substring(strIndex[0], strIndex[1]) : "";
}