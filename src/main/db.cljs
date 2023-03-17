(ns db
  (:require
   [malli.core :as mc]))

;; Common schemas
(def title
  [:string {:max 40}])

(def id
  [:and
    [:fn parse-uuid]])

;; Subtask
(def text
  (mc/schema [:string]))

#_{:clj-kondo/ignore [:redefined-var]}
(comment
  (+ 2 2)
  (js/console.log "Bruh")
  
  (mc/schema? title)
  (mc/validate title "a decent title without spaces")
  (mc/validate title "somerandomlylong title with spaces")

  (mc/schema? id)
  (mc/coerce id "59a3112a-b67f1-4ae6-bb4b-27076218d927")
  (mc/validate id "59a3112a-67f1-4ae6-bb4b-27076218d927")
  (mc/validate id "59a3112a-67f1-4ae6-bb4b-27076218d927sitn")
  ,)
