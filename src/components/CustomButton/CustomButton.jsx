import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FONTS } from '../../utils/fonts';
import colors from '../../utils/color';
import { fs, vw, vh } from '../../utils/responsive';

/**
 * CustomButton
 *
 * variant="primary"  → Yellow gradient (default)
 * variant="outline"  → Transparent bg, white border, white text
 * variant="solid"    → Pass backgroundColor prop for custom solid color
 */
const CustomButton = ({
  title,
  onPress,
  disabled = false,
  style,
  variant = 'primary',
  backgroundColor = null,
  textColor,
}) => {

  // ── OUTLINE button ─────────────────────────────────────────────────
  if (variant === 'outline') {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        disabled={disabled}
        style={[
          styles.base,
          styles.outlineBtn,
          disabled && styles.disabledOutline,
          style,
        ]}
      >
        <Text style={[styles.btnText, { color: textColor || colors.white }]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }

  // ── SOLID color button ─────────────────────────────────────────────
  if (variant === 'solid' || backgroundColor) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        disabled={disabled}
        style={[
          styles.base,
          styles.solidBtn,
          { backgroundColor: disabled ? colors.gray : (backgroundColor || colors.secondary) },
          style,
        ]}
      >
        <Text style={[styles.btnText, { color: textColor || colors.white }]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }

  // ── PRIMARY gradient button (default) ─────────────────────────────
  return (
    <LinearGradient
      colors={disabled ? [colors.gray, colors.gray] : colors.primary}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.base, style]}
    >
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        disabled={disabled}
        style={styles.gradientInner}
      >
        <Text style={[styles.btnText, { color: textColor || colors.black }]}>
          {title}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  // ✅ NO backgroundColor here — yahi bug tha!
  base: {
    borderRadius: vw(4),
    width: '100%',
    overflow: 'hidden',
  },
  gradientInner: {
    paddingVertical: vh(2.5),
    alignItems: 'center',
    width: '100%',
  },
  outlineBtn: {
    paddingVertical: vh(2.5),
    alignItems: 'center',
    backgroundColor: colors.bottomSheetBackground,     // ✅ transparent — no yellow!
    borderWidth: 0.5,
    borderColor: colors.black,    // rgba(255,255,255,0.22)
  },
  disabledOutline: {
    opacity: 0.5,
  },
  solidBtn: {
    paddingVertical: vh(3),
    alignItems: 'center',
  },
  btnText: {
    fontSize: fs(14),
    fontFamily: FONTS.display_medium,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});