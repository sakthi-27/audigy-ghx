<?php

class AudigyDeactivate
{
  public static function deactivate() {
    flush_rewrite_rules();
  }
}
