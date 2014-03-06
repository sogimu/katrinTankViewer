import argparse
import logging
import re
import sys
import json
import datetime
import ntpath

def path_leaf(path):
    head, tail = ntpath.split(path)
    return tail or ntpath.basename(head)

def findValueByKey(text, key):
    prog = re.compile(key + "\s*=\s*([a-z,A-Z,\d,-]*)")
    return prog.findall(text)[0]

def chanellFactory(text):
    chanell = {"name": ""}
    chanell["name"] = findValueByKey(text, "Name")
    return chanell

def hotSpotFactory(text):
    hotSpot = {"VRMLPointsID":-1}
    hotSpot["VRMLPointsID"] = findValueByKey(text, "ID")
    return hotSpot


class Finder:
    _text = ""
    _beginSubstr=""
    _endSubstr=""
    _currentPos = 0

    def __init__(self, text, beginSubstr, endSubstr):
        self._text = text
        self._beginSubstr = beginSubstr
        self._endSubstr = endSubstr

    def GetNextSubstr(self):

        beginSubstrPos = self._text.find(self._beginSubstr, self._currentPos)
        if(beginSubstrPos != -1):
            logging.info( "Finded beginSubstr: " + self._beginSubstr + " in " + str(beginSubstrPos))

            endSubstrPos = self._text.find(self._endSubstr, beginSubstrPos + len(self._beginSubstr))
            if(endSubstrPos != -1):
                logging.info( "Finded endSubstr: " + self._endSubstr + " in " + str(endSubstrPos))
            else:
                logging.warning("endSubstr: " + self._endSubstr + " not finded!")
        else:
            logging.warning("beginSubstr: " + self._beginSubstr + " not finded!")

        if(beginSubstrPos != -1 and endSubstrPos != -1):
            self._currentPos = endSubstrPos + len(self._endSubstr)

            return self._text[beginSubstrPos + len(self._beginSubstr):endSubstrPos]
        else:
            logging.warning('beginSubstr or endSubstr no finded!');
            return -1


def getPosOpenAndCloseBracketsNear(text, beginPos, openBracket, closeBracket):
    numberOfOpenBracket = 0;
    numberOfCloseBracket = 0;

    posOpenBracket = text.find(openBracket, beginPos)
    posCloseBracket = 0

    numberOfOpenBracket = 1

    if(posOpenBracket == -1):
        raise Exception("I can't find open bracket - " + openBracket)
    posOpenBracket += len(openBracket)

    for i in range(posOpenBracket + len(openBracket), len(text)):
        char = text[i:i+1]
        if(char == openBracket):
            numberOfOpenBracket+=1
            logging.info( "Fined open bracket in " + str(i))
            logging.info( "Number of open bracket: " + str(numberOfOpenBracket))

        if(char == closeBracket):
            numberOfCloseBracket+=1
            logging.info( "Fined close bracket in " + str(i))
            logging.info( "Number of close bracket: " + str(numberOfCloseBracket))

        if(numberOfOpenBracket == numberOfCloseBracket):
            posCloseBracket = i
            logging.info("Count of open bracket equal count of close bracket!")
            logging.info("Open bracket pos: " + str(posOpenBracket) + ", Close bracket pos: " + str(posCloseBracket) )
            return {"from": posOpenBracket, "to": posCloseBracket}

def getBodyOf(text, tag, openBracket, closeBracket):
    tagPos = text.find(tag)
    if(tagPos != -1):
        try:
            bodyPosition = getPosOpenAndCloseBracketsNear(text, tagPos + len(tag), openBracket, closeBracket)
            bodyText = text[bodyPosition.get("from"):bodyPosition.get("to")]
            return bodyText
        except:
            logging.error("Can't find open bracket. Is currupted structure?")
            sys.exit(2)
    else:
        logging.error("Can't find tag. Is currupted structure?")
        sys.exit(2)

def getChanells(cisFile):
    finder = Finder(cisFile, "Begin_OLESourceBuffer", "End_olesourcebuffer")

    chanels = {}

    index = 0;

    canFindYet = 1;

    while(canFindYet):
        OLESourceBuffer = finder.GetNextSubstr()
        if(OLESourceBuffer == -1):
            canFindYet = 0
            break
        chanels[index] = chanellFactory(OLESourceBuffer)
        index+=1;

    return chanels

def getHotSpots(cisFile):
    finder = Finder(cisFile, "Begin_HotSpotSet", "End_hotspotset")

    hotSpots = {}

    index = 1;

    canFindYet = 1;

    while(canFindYet):
        hotSpotText = finder.GetNextSubstr()
        if(hotSpotText == -1):
            canFindYet = 0
            break
        hotSpots[index] = hotSpotFactory(hotSpotText)
        index+=1

    return hotSpots

def getPointPos(vrmlFIle):
    shape = getBodyOf(vrmlFIle, "Shape", "{", "}")
    indexedFaceSet = getBodyOf(shape, "IndexedFaceSet", "{", "}")
    coordinate = getBodyOf(indexedFaceSet, "Coordinate", "{", "}")
    strPointsRep = getBodyOf(coordinate, "point", "[", "]")
    strPointsRep = strPointsRep.strip(" ")
    strPointsRep = strPointsRep.replace("\r\n", "")
    listOfstrRawPointRep = strPointsRep.split(", ")

    pointsFromVRMLFile = []
    for strPointRep in listOfstrRawPointRep:
        pointsFromVRMLFile.append(strPointRep.split(" "))
    return pointsFromVRMLFile

if(__name__ == '__main__'):
    parser = argparse.ArgumentParser(description='Proccessing cis and VRML files')
    parser.add_argument('CIS_File', type=str, help='path to cis file')
    parser.add_argument('VRML_FIle', type=str, help='path to VRML file')
    parser.add_argument('JSON_FIle', type=str, help='path to resulting JSON file')
    args = parser.parse_args()

    #try:
    #     pathToCisFile = "ms_online5.cis"#args.CIS_File
    #     pathToVRMLFIle = "MS.WRL"#args.VRML_FIle
    #     pathToJSONFile = "hotSpot.json"#args.JSON_File

    pathToCisFile = args.CIS_File
    pathToVRMLFIle = args.VRML_FIle
    pathToJSONFile = args.JSON_FIle

    logging.basicConfig(filename=str(datetime.datetime.now()) + "> " + path_leaf(pathToCisFile) + "+" + path_leaf(pathToVRMLFIle) + "=" + path_leaf(pathToJSONFile) + ".log",level=logging.DEBUG)

    f0 = open(pathToCisFile, 'r')
    cisFile = f0.read()
    f0.close()

    f1 = open(pathToVRMLFIle, 'r')
    vrmlFIle = f1.read()
    f1.close()

    pointPosList = getPointPos(vrmlFIle)
    chanellList = getChanells(cisFile)
    hotSpotsList = getHotSpots(cisFile)

    for hotSpotIndex in hotSpotsList:
        hotSpotsList[hotSpotIndex]["VRMLPoint"] = pointPosList[int(hotSpotsList[hotSpotIndex]["VRMLPointsID"][0])]
        hotSpotsList[hotSpotIndex]["name"] = chanellList[hotSpotIndex]["name"]

    hotSpotsJSON = json.dumps(hotSpotsList)

    f3 = open(pathToJSONFile, 'w+')
    f3.write(hotSpotsJSON)
    f3.close()

    print "Number of hot spots from cis file: " + str(len(hotSpotsList))
    print "Number of points in VRML file: " + str(len(pointPosList))
    print "File " + pathToJSONFile + " have done!"

    # except:
    #     e = sys.exc_info()[1]
    #     print(e)
    #     sys.exit(2)
