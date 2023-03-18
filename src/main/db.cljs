(ns db
  (:require
   [malli.core :as mc]
   [malli.transform :as mt]
   [malli.generator :as mg]))

;; Common schemas
(def title [:string {:max 40}])
(def id [:uuid])

;; Subtask
(def text [:string])
(def completed? [:boolean])

(def subtask
  [:map
   [:id id]
   [:text text]
   [:completed? completed?]])

;; Tasks
(def description [:string])
(def status [:string])
(def subtasks [:vector {:gen/min 0, :gen/max 5} subtask])

(def task
  [:map {:closed true}
   [:id id]
   [:title title]
   [:description description]
   [:status status]
   [:subtasks subtasks]])

;; Columns
(def color [:string {:min 7, :max 7}])
(def num [nat-int?])
(def tasks [:vector {:gen/min 0, :gen/max 3} task])

(def column
  [:map
   [:id id]
   [:title title]
   [:color color]
   [:num num]
   [:tasks tasks]])

;; Board
(def columns [:vector {:gen/min 0, :gen/max 2} column])

(def board
  [:map
   [:id id]
   [:title title]
   [:columns columns]])


;; Finally APP DB (for refx)
(def app-db
  [:map
   [:boards [:vector {:gen/min 0, :gen/max 2} board]]])

(def default-db
  "Initialize the app-state DB."
  {:boards []})

#_{:clj-kondo/ignore [:redefined-var]}
(comment
  (mc/schema? (mc/schema [nat-int?]))
  (mc/validate title "a decent title without spaces")
  (mc/validate title "somerandomlylong title with spaces with more and more characters")

  (mc/validate id (parse-uuid "59a3112a-67f1-4ae6-bb4b-27076218d927"))
  (mc/validate id #uuid"59a3112a-67f1-4ae6-bb4b-27076218d927")
  (mc/validate id (parse-uuid "59a3112a-67f1-4ae6-bb4b-27076218d927-ni"))
  (mc/validate id (mc/decode id "59a3112a-67f1-4ae6-bb4b-27076218d927" mt/string-transformer))
  (mc/validate id (mc/decode id "59a3112a-67f1-4ae6-bb4b-27076218d927-ni" mt/string-transformer))

  (mc/validate completed? false)

  (mc/validate subtask {:id #uuid"59a3112a-67f1-4ae6-bb4b-27076218d927"
                        :text "This is a subtask"
                        :completed? false})
  (mc/coerce subtask {:id "59a3112a-67f1-4ae6-bb4b-27076218d927"
                      :text "This is a subtask"
                      :completed? true}
             mt/string-transformer)

  (mg/generate subtask)

  (mg/generate task)
  ;; => {:id #uuid "68238b9f-e676-46b9-884e-b79073b1886b",
  ;;     :title "mTk92qK66R4oS8MwPfzAuPy935Q2t9t5DA0",
  ;;     :description "8zoeg25jd6TnMFS8bx9qV8",
  ;;     :status "6Fx968",
  ;;     :subtasks
  ;;     [{:id #uuid "03fe79db-4a8b-4c3b-83a4-fbb643c3ea06",
  ;;       :text "rl0l4jU1",
  ;;       :completed? true}
  ;;      {:id #uuid "f8e54890-20aa-477d-bb8a-e9ff370a431a",
  ;;       :text "Q8p0iVBApFNMt86AYMaKCPu3R",
  ;;       :completed? false}
  ;;      {:id #uuid "26015f87-8763-44ce-ac5a-9b5531ee8050",
  ;;       :text "4",
  ;;       :completed? true}]}

  (mc/validate task {:id #uuid"59a3112a-67f1-4ae6-bb4b-27076218d927"
                     :title "Some title"
                     :description "This is my task"
                     :status "TODO"
                     :subtasks (mg/generate [:vector {:gen/min 1, :gen/max 2} subtask])})

  (mg/generate column)
  ;; => {:id #uuid "743e0160-eea6-41fd-8cf8-7cbd85de6a5a",
  ;;     :title "6TlDUMHR78Bb36A",
  ;;     :color "5swVh3V",
  ;;     :num 378179,
  ;;     :tasks
  ;;     [{:id #uuid "0e74a554-fa7d-46c2-99ee-12c9642e08ea",
  ;;       :title "",
  ;;       :description "t700x6nZ3ixrkZ9",
  ;;       :status "akAx66FX",
  ;;       :subtasks
  ;;       [{:id #uuid "ac21f5cc-f1d5-4c35-a021-c7d5a0cabde1",
  ;;         :text "MgL7A59",
  ;;         :completed? true}]}
  ;;      {:id #uuid "1e36e122-049c-46b6-b993-0d6f3b17d373",
  ;;       :title "74g25",
  ;;       :description "JX8QE7KFdtdqr40v42m2vwgf",
  ;;       :status "9gbI0sN67c",
  ;;       :subtasks
  ;;       [{:id #uuid "7441deea-1d5c-417d-ba49-b52ade40b366",
  ;;         :text "3L1p8oY8LhT7b8eS8kk2oDa6",
  ;;         :completed? false}
  ;;        {:id #uuid "6393758d-516f-46a4-8df0-994e15ace826",
  ;;         :text "X3",
  ;;         :completed? false}]}
  ;;      {:id #uuid "28d18246-2b18-4d4c-ba45-b9f84dbf7f8d",
  ;;       :title "75S581rt7m7UR70G0u3G7O3jMiTIqd",
  ;;       :description "GDs1RxUy55i8V4lU",
  ;;       :status "07F3Tu3XWxo13RQ",
  ;;       :subtasks
  ;;       [{:id #uuid "71d0f244-183c-4b38-ab7c-854a95567620",
  ;;         :text "rV6OPSL4QE0rGU3sq5",
  ;;         :completed? false}
  ;;        {:id #uuid "b0d16c41-9fc7-4a15-9ae2-a7ad6dab353b",
  ;;         :text "MZz9Ie2YxV3KV34zpXcKxJK5Jk30",
  ;;         :completed? false}
  ;;        {:id #uuid "71d4b500-f01e-48f7-8726-b77d589e371a",
  ;;         :text "dMXHs7bcpn",
  ;;         :completed? false}]}]}
  ,)
