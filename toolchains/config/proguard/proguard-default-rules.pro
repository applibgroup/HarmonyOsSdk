# This is a configuration file for ProGuard.
# https://www.guardsquare.com/en/products/proguard/manual/usage
#

-verbose
-dontusemixedcaseclassnames
-dontskipnonpubliclibraryclasses
-dontskipnonpubliclibraryclassmembers
#-dontshrink
-optimizations !code/simplification/artithmetic,!field/*,!class/merging/*
-optimizationpasses 5
-keepattributes *Annotation*,Signature,SourceFile,LineNumberTable,InnerClasses,EnclosingMethod
-dontpreverify
-ignorewarnings

################################
-keep public class * extends *.aafwk.ability.Ability

-keep public class * extends *.ace.ability.AceAbility

-keep public class * extends *.aafwk.ability.AbilitySlice

-keep public class * extends *.aafwk.ability.AbilityPackage

-keepclasseswithmembers,allowshrinking class * {
    native <methods>;
}

-dontnote java.lang.invoke.**

################################

# For native methods, see https://www.guardsquare.com/en/products/proguard/manual/examples#native
-keepclasseswithmembernames class * {
    native <methods>;
}


# For enumeration classes, see https://www.guardsquare.com/en/products/proguard/manual/examples#enumerations
-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}


########################

