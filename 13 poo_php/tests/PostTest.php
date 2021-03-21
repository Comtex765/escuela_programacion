<?php

use PHPUnit\Framework\TestCase;
use App\post;
use App\Comment;

class PosTest extends TestCase{
    public function test_add_comment_to_post(){
        
        $post = new Post();
        $comment = new Comment();

        $post->addComment($comment);

        $this->assertEquals(1, $post->countComments());
        $this->assertInstanceOf(Comment::class, $post->getComments()[0]);
    }
}