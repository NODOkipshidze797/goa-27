# 1. 
def should_we_go_to_the_test(ratings, writers):
    return ratings >= 70 or writers >= 5
# 2. 
def can_we_go_outside(weather_good, time_sufficient, ready_to_go):
    return (weather_good or time_sufficient) and ready_to_go
# 3.
def should_we_take_a_step(no_barrier, space_available, signal_from_other_side):
    return (no_barrier and space_available) or signal_from_other_side
# 4.
def should_we_take_the_item(item_available, allowed_to_take, another_person_wants_to_use):
    return (item_available and allowed_to_take) or not another_person_wants_to_use
# 5.
def should_we_recall_information(task_current, info_needed, time_to_process):
    return (task_current or info_needed) and time_to_process
# 6. 
def should_we_sleep(is_late, is_tired, up_early_next_day, lights_off):
    return (is_late and is_tired) or (up_early_next_day and lights_off)
# 7.
def should_we_go_to_a_party(friends_agree, no_work_next_day, party_nearby):
    return (friends_agree and no_work_next_day) or party_nearby
# 8. 
def should_we_stay_at_home(is_rainy, is_snowy, plans_require_going_outside):
    return (is_rainy or is_snowy) and not plans_require_going_outside
# 9. 
def should_we_go_for_a_run(weather_dry, athletic_shoes_available, friend_willing_to_run):
    return (weather_dry and athletic_shoes_available) or friend_willing_to_run
# 10. 
def should_we_watch_football(is_weekend, have_no_other_tasks, favorite_team_playing):
    return (is_weekend and have_no_other_tasks) or favorite_team_playing
