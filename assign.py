import datetime
import heapq as hq

# class Lecture:
#     def __init__(self, start_time, end_time, name):
#         self.start_time = start_time
#         self.end_time = end_time
#         self.name = name

"""
Args: start_times (arr), end_times (arr), max_classes (int)
Determine the minimum number of classrooms needed to assign each lecture a classroom (no overlap)
"""
def assign(lectures):
    min_classes = 0
    for i in range(len(lectures)):
        lectures[i]["day"] = datetime.datetime.strptime(lectures[i]["day"], "%m/%d/%Y")
        lectures[i]["starttime"] = datetime.datetime.strptime(lectures[i]["starttime"], "%I:%M %p")
        lectures[i]["endtime"] = datetime.datetime.strptime(lectures[i]["endtime"], "%I:%M %p")

    lectures = sorted(lectures, key=lambda x: x["starttime"])
    print(lectures)
    #end_times = sorted(end_times)
    min_heap = []
    print(min_heap)

    for i in range(len(start_times)):
        pass

"""
string1 = "01/15/2022 1:50 AM"
string2 = "01/15/2022 1:50 PM"
dt1 = datetime.datetime.strptime(string1, "%m/%d/%Y %I:%M %p")
dt2 = datetime.datetime.strptime(string2, "%m/%d/%Y %I:%M %p")
diff = dt2 - dt1
print(dt1, dt2)
print(diff)
"""

arr = ["01/15/2022 1:50 PM","01/15/2022 1:50 AM", "01/15/2022 1:40 AM","01/15/2022 1:30 AM","01/10/2022 1:50 AM","01/15/2021 1:50 AM"]
assign(arr, arr.copy(), 10)