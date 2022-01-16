import datetime
import heapq as hq

"""
Args: start_times (arr), end_times (arr), max_classes (int)
Determine the minimum number of classrooms needed to assign each lecture a classroom (no overlap)
"""
def assign(lectures):
    min_classes = 1
    for i in range(len(lectures)):
        lectures[i]["dt_starttime"] = datetime.datetime.strptime(lectures[i]["day"]+lectures[i]["starttime"], "%Y-%m-%d%H:%M")
        lectures[i]["dt_endtime"] = datetime.datetime.strptime(lectures[i]["day"]+lectures[i]["endtime"], "%Y-%m-%d%H:%M")

    lectures = sorted(lectures, key=lambda x: x["dt_starttime"])
    min_heap = [(lectures[0]["dt_endtime"], min_classes)] # Each tup is classroom; key is finish time of last class
    lectures[0]["classroom"] = min_classes
    hq.heapify(min_heap)

    for j in range(1, len(lectures)):
        if (lectures[j]["dt_starttime"] >= min_heap[0][0]):
             # Lecture is compatible with classroom if starttime > last lectures finish time in classroom 
             # (since lectures are sorted by starttime)
             classroom = hq.heappop(min_heap)
             hq.heappush(min_heap, (lectures[j]["dt_endtime"], classroom[1]))
             lectures[j]["classroom"] = classroom[1]
        else:
            # Lecture is not compatible with classroon
            # Need to allocate new classroom for this lecture      
            min_classes += 1
            hq.heappush(min_heap, (lectures[j]["dt_endtime"], min_classes))
            lectures[j]["classroom"] = min_classes
    """
    print(min_heap)
    print()
    [print (x) for x in lectures]
    print("min classes needed:", min_classes)
    """
    return [lectures, min_classes]