<?php
$JAVA_HOME = "/opt/jdk1.6.0_43";
$PATH = "$JAVA_HOME/bin:".getenv('PATH');
putenv("JAVA_HOME=$JAVA_HOME");
putenv("PATH=$PATH");
$r=`echo $JAVA_HOME; which java; java -version 2>&1`;
echo "<pre>$r</pre>";
?>