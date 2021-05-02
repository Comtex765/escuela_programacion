<<<<<<< HEAD
<?php

namespace App;

class Post{
    protected $comments = [];
    
    public function addComment(Comment $comment){
        $this->comments[] = $comment;
    }

    public function countComments(){
        return count($this->comments);
    }

    public function getComments(){
        return $this->comments;
    }
=======
<?php

namespace App;

class Post{
    protected $comments = [];
    
    public function addComment(Comment $comment){
        $this->comments[] = $comment;
    }

    public function countComments(){
        return count($this->comments);
    }

    public function getComments(){
        return $this->comments;
    }
>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
}