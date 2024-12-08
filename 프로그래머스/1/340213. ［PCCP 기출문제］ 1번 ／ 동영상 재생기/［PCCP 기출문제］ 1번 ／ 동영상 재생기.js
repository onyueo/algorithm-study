function solution(video_len, pos, op_start, op_end, commands) {
    var now = convert(pos)
    video_len = convert(video_len)
    op_start = convert(op_start)
    op_end = convert(op_end)
    
    for (var command of commands) {
         if (op_start <= now && now <= op_end) {
            now = op_end
        }
        
        if (command === "next") {
            now = next(now, video_len)
        } else {
            now = prev(now)
        }
        
        if (op_start <= now && now <= op_end) {
            now = op_end
        }
    }
    
    return revert(now);
}

function next(now, end) {
    if (now < end - 10) {
        return now + 10
    } else {
        return end
    }
}


function prev(now) {
    if (now < 10) {
        return 0
    } else {
        return now - 10
    }
}
    

function convert(time) {
    var h = parseInt(time.slice(0, 2))
    var m = parseInt(time.slice(3, 5))
    
    return h * 60 + m
}


function revert(time) {
    var h = Math.floor(time / 60);
    var m = time % 60;
        
    return String(h).padStart(2, '0') + ":" + String(m).padStart(2, '0')
}

