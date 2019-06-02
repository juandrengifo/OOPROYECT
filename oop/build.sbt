name := """oop"""
organization := "Atom"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.12.8"

libraryDependencies += guice
libraryDependencies += jdbc
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "4.0.2" % Test
libraryDependencies ++= Seq(evolutions)
libraryDependencies ++= Seq("mysql" % "mysql-connector-java" % "5.1.27")
// Adds additional packages into Twirl
//TwirlKeys.templateImports += "Atom.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "Atom.binders._"
