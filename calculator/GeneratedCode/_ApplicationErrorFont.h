/*******************************************************************************
*
* E M B E D D E D   W I Z A R D   P R O J E C T
*
*                                                Copyright (c) TARA Systems GmbH
*                                    written by Paul Banach and Manfred Schweyer
*
********************************************************************************
*
* This file was generated automatically by Embedded Wizard Studio.
*
* Please do not make any modifications of this file! The modifications are lost
* when the file is generated again by Embedded Wizard Studio!
*
* The template of this heading text can be found in the file 'head.ewt' in the
* directory 'Platforms' of your Embedded Wizard installation directory. If you
* wish to adapt this text, please copy the template file 'head.ewt' into your
* project directory and edit the copy only. Please avoid any modifications of
* the original template file!
*
* Version  : 13.04
* Profile  : Win32
* Platform : Windows.Software.RGBA8888
*
*******************************************************************************/

/* Font resource : 'Application::ErrorFont' */
EW_DEFINE_FONT_RES( ApplicationErrorFont, 16, 4, 0, 16, 0x00C0, 0x00C0 )
  EW_GLYPH( 0x0000, 0, -11, 8, 11, 8, 0x00000000 ),
  EW_GLYPH( 0x0020, 0, 0, 0, 0, 2, 0x0000012F ),                /* ' ' */
  EW_GLYPH( 0x0021, 1, -11, 2, 11, 4, 0x0000012F ),             /* '!' */
  EW_GLYPH( 0x0022, 0, -11, 5, 4, 5, 0x00000177 ),              /* '"' */
  EW_GLYPH( 0x0023, 0, -11, 8, 11, 8, 0x000001BC ),             /* '#' */
  EW_GLYPH( 0x0024, 0, -11, 7, 13, 7, 0x000002E6 ),             /* '$' */
  EW_GLYPH( 0x0025, 0, -11, 10, 11, 10, 0x0000041A ),           /* '%' */
  EW_GLYPH( 0x0026, 0, -11, 8, 11, 8, 0x000005A1 ),             /* '&' */
  EW_GLYPH( 0x0027, 0, -11, 2, 4, 2, 0x000006C4 ),              /* ''' */
  EW_GLYPH( 0x0028, 0, -12, 4, 15, 4, 0x000006E6 ),             /* '(' */
  EW_GLYPH( 0x0029, -1, -12, 5, 15, 4, 0x00000795 ),            /* ')' */
  EW_GLYPH( 0x002A, 0, -11, 5, 4, 4, 0x0000086E ),              /* '*' */
  EW_GLYPH( 0x002B, 0, -7, 7, 7, 7, 0x000008B4 ),               /* '+' */
  EW_GLYPH( 0x002C, 0, -2, 3, 4, 3, 0x00000921 ),               /* ',' */
  EW_GLYPH( 0x002D, 0, -4, 4, 1, 4, 0x00000957 ),               /* '-' */
  EW_GLYPH( 0x002E, 0, -2, 3, 2, 3, 0x0000096B ),               /* '.' */
  EW_GLYPH( 0x002F, -1, -11, 6, 12, 5, 0x0000097E ),            /* '/' */
  EW_GLYPH( 0x0030, 0, -11, 7, 11, 7, 0x00000A3D ),             /* '0' */
  EW_GLYPH( 0x0031, 0, -11, 7, 11, 7, 0x00000B27 ),             /* '1' */
  EW_GLYPH( 0x0032, 0, -11, 7, 11, 7, 0x00000BC5 ),             /* '2' */
  EW_GLYPH( 0x0033, 0, -11, 7, 11, 7, 0x00000CCE ),             /* '3' */
  EW_GLYPH( 0x0034, 0, -11, 7, 11, 7, 0x00000DCA ),             /* '4' */
  EW_GLYPH( 0x0035, 0, -11, 7, 11, 7, 0x00000E97 ),             /* '5' */
  EW_GLYPH( 0x0036, 0, -11, 7, 11, 7, 0x00000F7C ),             /* '6' */
  EW_GLYPH( 0x0037, 0, -11, 7, 11, 7, 0x00001090 ),             /* '7' */
  EW_GLYPH( 0x0038, 0, -11, 7, 11, 7, 0x00001174 ),             /* '8' */
  EW_GLYPH( 0x0039, 0, -11, 7, 11, 7, 0x000012A7 ),             /* '9' */
  EW_GLYPH( 0x003A, 0, -8, 3, 8, 3, 0x000013B7 ),               /* ':' */
  EW_GLYPH( 0x003B, 0, -8, 3, 10, 3, 0x000013F6 ),              /* ';' */
  EW_GLYPH( 0x003C, 0, -7, 7, 7, 7, 0x00001458 ),               /* '<' */
  EW_GLYPH( 0x003D, 0, -6, 7, 4, 7, 0x0000150F ),               /* '=' */
  EW_GLYPH( 0x003E, 0, -7, 7, 7, 7, 0x0000157C ),               /* '>' */
  EW_GLYPH( 0x003F, 0, -11, 6, 11, 6, 0x0000163A ),             /* '?' */
  EW_GLYPH( 0x0040, 0, -11, 11, 13, 12, 0x0000170B ),           /* '@' */
  EW_GLYPH( 0x0041, 0, -11, 8, 11, 8, 0x00001917 ),             /* 'A' */
  EW_GLYPH( 0x0042, 1, -11, 7, 11, 8, 0x00001A2D ),             /* 'B' */
  EW_GLYPH( 0x0043, 0, -11, 7, 11, 7, 0x00001B1F ),             /* 'C' */
  EW_GLYPH( 0x0044, 1, -11, 7, 11, 9, 0x00001BF4 ),             /* 'D' */
  EW_GLYPH( 0x0045, 1, -11, 6, 11, 7, 0x00001CC7 ),             /* 'E' */
  EW_GLYPH( 0x0046, 1, -11, 5, 11, 6, 0x00001D68 ),             /* 'F' */
  EW_GLYPH( 0x0047, 0, -11, 8, 11, 8, 0x00001DEB ),             /* 'G' */
  EW_GLYPH( 0x0048, 1, -11, 7, 11, 9, 0x00001EF4 ),             /* 'H' */
  EW_GLYPH( 0x0049, 1, -11, 2, 11, 4, 0x00001F8F ),             /* 'I' */
  EW_GLYPH( 0x004A, 0, -11, 5, 11, 5, 0x00001FBA ),             /* 'J' */
  EW_GLYPH( 0x004B, 1, -11, 7, 11, 8, 0x0000201F ),             /* 'K' */
  EW_GLYPH( 0x004C, 1, -11, 5, 11, 6, 0x00002111 ),             /* 'L' */
  EW_GLYPH( 0x004D, 1, -11, 9, 11, 10, 0x00002169 ),            /* 'M' */
  EW_GLYPH( 0x004E, 1, -11, 7, 11, 9, 0x00002267 ),             /* 'N' */
  EW_GLYPH( 0x004F, 0, -11, 9, 11, 9, 0x00002336 ),             /* 'O' */
  EW_GLYPH( 0x0050, 1, -11, 6, 11, 7, 0x00002461 ),             /* 'P' */
  EW_GLYPH( 0x0051, 0, -11, 9, 13, 9, 0x00002511 ),             /* 'Q' */
  EW_GLYPH( 0x0052, 1, -11, 7, 11, 8, 0x0000268A ),             /* 'R' */
  EW_GLYPH( 0x0053, 0, -11, 7, 11, 7, 0x00002774 ),             /* 'S' */
  EW_GLYPH( 0x0054, 0, -11, 7, 11, 7, 0x0000288A ),             /* 'T' */
  EW_GLYPH( 0x0055, 0, -11, 8, 11, 9, 0x0000290E ),             /* 'U' */
  EW_GLYPH( 0x0056, 0, -11, 8, 11, 8, 0x000029C7 ),             /* 'V' */
  EW_GLYPH( 0x0057, 0, -11, 12, 11, 11, 0x00002AE3 ),           /* 'W' */
  EW_GLYPH( 0x0058, 0, -11, 8, 11, 8, 0x00002CB2 ),             /* 'X' */
  EW_GLYPH( 0x0059, 0, -11, 7, 11, 7, 0x00002DF2 ),             /* 'Y' */
  EW_GLYPH( 0x005A, 0, -11, 7, 11, 8, 0x00002ED0 ),             /* 'Z' */
  EW_GLYPH( 0x005B, 0, -11, 4, 13, 4, 0x00002FBB ),             /* '[' */
  EW_GLYPH( 0x005C, 0, -11, 5, 11, 4, 0x00003017 ),             /* '\' */
  EW_GLYPH( 0x005D, 0, -11, 3, 13, 4, 0x000030B4 ),             /* ']' */
  EW_GLYPH( 0x005E, 0, -11, 5, 6, 5, 0x000030F5 ),              /* '^' */
  EW_GLYPH( 0x005F, -1, 1, 8, 1, 6, 0x0000316A ),               /* '_' */
  EW_GLYPH( 0x0060, 0, -12, 4, 3, 4, 0x00003191 ),              /* '`' */
  EW_GLYPH( 0x0061, 0, -8, 7, 8, 7, 0x000031BE ),               /* 'a' */
  EW_GLYPH( 0x0062, 1, -11, 6, 11, 7, 0x00003288 ),             /* 'b' */
  EW_GLYPH( 0x0063, 0, -8, 6, 8, 6, 0x00003343 ),               /* 'c' */
  EW_GLYPH( 0x0064, 0, -11, 7, 11, 7, 0x000033E0 ),             /* 'd' */
  EW_GLYPH( 0x0065, 0, -8, 7, 8, 7, 0x000034A2 ),               /* 'e' */
  EW_GLYPH( 0x0066, 0, -11, 5, 11, 4, 0x0000357D ),             /* 'f' */
  EW_GLYPH( 0x0067, 0, -8, 7, 11, 7, 0x000035F8 ),              /* 'g' */
  EW_GLYPH( 0x0068, 1, -11, 6, 11, 7, 0x00003736 ),             /* 'h' */
  EW_GLYPH( 0x0069, 1, -11, 2, 11, 4, 0x000037C5 ),             /* 'i' */
  EW_GLYPH( 0x006A, -1, -11, 4, 14, 4, 0x00003800 ),            /* 'j' */
  EW_GLYPH( 0x006B, 1, -11, 6, 11, 7, 0x00003867 ),             /* 'k' */
  EW_GLYPH( 0x006C, 1, -11, 3, 11, 4, 0x00003927 ),             /* 'l' */
  EW_GLYPH( 0x006D, 0, -8, 10, 8, 11, 0x00003967 ),             /* 'm' */
  EW_GLYPH( 0x006E, 0, -8, 7, 8, 7, 0x00003A28 ),               /* 'n' */
  EW_GLYPH( 0x006F, 0, -8, 7, 8, 7, 0x00003AA2 ),               /* 'o' */
  EW_GLYPH( 0x0070, 0, -8, 7, 11, 7, 0x00003B62 ),              /* 'p' */
  EW_GLYPH( 0x0071, 0, -8, 7, 11, 7, 0x00003C35 ),              /* 'q' */
  EW_GLYPH( 0x0072, 0, -8, 5, 8, 5, 0x00003D06 ),               /* 'r' */
  EW_GLYPH( 0x0073, 0, -8, 5, 8, 5, 0x00003D5C ),               /* 's' */
  EW_GLYPH( 0x0074, 0, -10, 5, 10, 4, 0x00003E03 ),             /* 't' */
  EW_GLYPH( 0x0075, 0, -8, 7, 8, 7, 0x00003E71 ),               /* 'u' */
  EW_GLYPH( 0x0076, 0, -8, 6, 8, 6, 0x00003EF0 ),               /* 'v' */
  EW_GLYPH( 0x0077, 0, -8, 9, 8, 9, 0x00003FAC ),               /* 'w' */
  EW_GLYPH( 0x0078, 0, -8, 6, 8, 6, 0x000040D8 ),               /* 'x' */
  EW_GLYPH( 0x0079, 0, -8, 6, 11, 6, 0x0000419F ),              /* 'y' */
  EW_GLYPH( 0x007A, 0, -8, 6, 8, 6, 0x00004288 ),               /* 'z' */
  EW_GLYPH( 0x007B, 0, -11, 4, 14, 4, 0x00004336 ),             /* '{' */
  EW_GLYPH( 0x007C, 0, -11, 3, 14, 3, 0x000043C5 ),             /* '|' */
  EW_GLYPH( 0x007D, 0, -11, 4, 14, 4, 0x00004405 ),             /* '}' */
  EW_GLYPH( 0x007E, 0, -5, 7, 2, 7, 0x00004495 ),               /* '~' */
  EW_GLYPH( 0x00A0, 0, 0, 0, 0, 2, 0x000044CF ),
  EW_GLYPH( 0x00A1, 0, -8, 3, 11, 4, 0x000044CF ),
  EW_GLYPH( 0x00A2, 0, -9, 6, 10, 7, 0x0000451F ),
  EW_GLYPH( 0x00A3, 0, -11, 6, 11, 6, 0x000045E3 ),
  EW_GLYPH( 0x00A4, 0, -8, 7, 5, 7, 0x00004698 ),
  EW_GLYPH( 0x00A5, 0, -11, 7, 11, 7, 0x00004728 ),
  EW_GLYPH( 0x00A6, 0, -11, 3, 14, 3, 0x00004853 ),
  EW_GLYPH( 0x00A7, 0, -11, 5, 11, 5, 0x000048A7 ),
  EW_GLYPH( 0x00A8, 0, -11, 4, 2, 4, 0x0000499E ),
  EW_GLYPH( 0x00A9, 0, -11, 9, 11, 9, 0x000049B6 ),
  EW_GLYPH( 0x00AA, 0, -11, 4, 4, 4, 0x00004B61 ),
  EW_GLYPH( 0x00AB, 0, -7, 6, 6, 6, 0x00004BAD ),
  EW_GLYPH( 0x00AC, 0, -5, 7, 4, 7, 0x00004C3C ),
  EW_GLYPH( 0x00AD, 0, -4, 4, 1, 4, 0x00004C91 ),
  EW_GLYPH( 0x00AE, 0, -11, 9, 11, 9, 0x00004CA5 ),
  EW_GLYPH( 0x00AF, 0, -10, 4, 1, 4, 0x00004E40 ),
  EW_GLYPH( 0x00B0, 0, -11, 4, 4, 4, 0x00004E55 ),
  EW_GLYPH( 0x00B1, 0, -9, 7, 9, 7, 0x00004E9A ),
  EW_GLYPH( 0x00B2, 0, -11, 4, 7, 4, 0x00004F39 ),
  EW_GLYPH( 0x00B3, 0, -11, 4, 7, 4, 0x00004FB0 ),
  EW_GLYPH( 0x00B4, 0, -12, 4, 3, 4, 0x00005026 ),
  EW_GLYPH( 0x00B5, 0, -8, 7, 11, 7, 0x00005051 ),
  EW_GLYPH( 0x00B6, 0, -11, 7, 13, 7, 0x000050EB ),
  EW_GLYPH( 0x00B7, 0, -6, 3, 1, 3, 0x000051A7 ),
  EW_GLYPH( 0x00B8, 0, 0, 4, 3, 4, 0x000051B3 ),
  EW_GLYPH( 0x00B9, 0, -11, 3, 7, 4, 0x000051E2 ),
  EW_GLYPH( 0x00BA, 0, -11, 4, 4, 4, 0x0000520B ),
  EW_GLYPH( 0x00BB, 0, -7, 6, 6, 6, 0x00005254 ),
  EW_GLYPH( 0x00BC, 0, -11, 9, 11, 9, 0x000052E8 ),
  EW_GLYPH( 0x00BD, 0, -11, 9, 11, 10, 0x0000541D ),
  EW_GLYPH( 0x00BE, 0, -11, 9, 11, 9, 0x00005555 ),
  EW_GLYPH( 0x00BF, 0, -8, 6, 11, 6, 0x000056BF ),
  EW_GLYPH( 0x00C0, 0, -14, 8, 14, 8, 0x0000578B ),
  EW_GLYPH( 0x00C1, 0, -14, 8, 14, 8, 0x000058D9 ),
  EW_GLYPH( 0x00C2, 0, -14, 8, 14, 8, 0x00005A24 ),
  EW_GLYPH( 0x00C3, 0, -13, 8, 13, 8, 0x00005B7B ),
  EW_GLYPH( 0x00C4, 0, -13, 8, 13, 8, 0x00005CCD ),
  EW_GLYPH( 0x00C5, 0, -14, 8, 14, 8, 0x00005E13 ),
  EW_GLYPH( 0x00C6, 0, -11, 11, 11, 11, 0x00005F5C ),
  EW_GLYPH( 0x00C7, 0, -11, 7, 14, 7, 0x000060D2 ),
  EW_GLYPH( 0x00C8, 1, -14, 6, 14, 7, 0x000061EB ),
  EW_GLYPH( 0x00C9, 1, -15, 6, 15, 7, 0x000062BA ),
  EW_GLYPH( 0x00CA, 1, -14, 6, 14, 7, 0x0000639E ),
  EW_GLYPH( 0x00CB, 1, -13, 6, 13, 7, 0x00006475 ),
  EW_GLYPH( 0x00CC, 0, -14, 3, 14, 4, 0x00006546 ),
  EW_GLYPH( 0x00CD, 1, -15, 4, 15, 4, 0x0000659D ),
  EW_GLYPH( 0x00CE, 0, -14, 4, 14, 4, 0x00006619 ),
  EW_GLYPH( 0x00CF, 0, -13, 4, 13, 4, 0x00006696 ),
  EW_GLYPH( 0x00D0, 0, -11, 8, 11, 9, 0x000066FB ),
  EW_GLYPH( 0x00D1, 1, -13, 7, 13, 9, 0x000067F5 ),
  EW_GLYPH( 0x00D2, 0, -14, 9, 14, 9, 0x000068FA ),
  EW_GLYPH( 0x00D3, 0, -14, 9, 14, 9, 0x00006A61 ),
  EW_GLYPH( 0x00D4, 0, -14, 9, 14, 9, 0x00006BCA ),
  EW_GLYPH( 0x00D5, 0, -13, 9, 13, 9, 0x00006D3F ),
  EW_GLYPH( 0x00D6, 0, -13, 9, 13, 9, 0x00006EA4 ),
  EW_GLYPH( 0x00D7, 0, -7, 7, 7, 7, 0x00007003 ),
  EW_GLYPH( 0x00D8, 0, -11, 9, 11, 9, 0x000070AD ),
  EW_GLYPH( 0x00D9, 0, -14, 8, 14, 9, 0x000071FF ),
  EW_GLYPH( 0x00DA, 0, -14, 8, 14, 9, 0x000072F2 ),
  EW_GLYPH( 0x00DB, 0, -14, 8, 14, 9, 0x000073E9 ),
  EW_GLYPH( 0x00DC, 0, -13, 8, 13, 9, 0x000074E9 ),
  EW_GLYPH( 0x00DD, 0, -15, 7, 15, 7, 0x000075D8 ),
  EW_GLYPH( 0x00DE, 1, -11, 6, 11, 7, 0x000076FD ),
  EW_GLYPH( 0x00DF, 1, -11, 6, 11, 7, 0x000077B3 ),
  EW_GLYPH( 0x00E0, 0, -11, 7, 11, 7, 0x0000789E ),
  EW_GLYPH( 0x00E1, 0, -11, 7, 11, 7, 0x000079A0 ),
  EW_GLYPH( 0x00E2, 0, -11, 7, 11, 7, 0x00007A9D ),
  EW_GLYPH( 0x00E3, 0, -11, 7, 11, 7, 0x00007BA4 ),
  EW_GLYPH( 0x00E4, 0, -11, 7, 11, 7, 0x00007CC1 ),
  EW_GLYPH( 0x00E5, 0, -11, 7, 11, 7, 0x00007DBE ),
  EW_GLYPH( 0x00E6, 0, -8, 10, 8, 10, 0x00007EBE ),
  EW_GLYPH( 0x00E7, 0, -8, 6, 11, 6, 0x00008012 ),
  EW_GLYPH( 0x00E8, 0, -11, 7, 11, 7, 0x000080F6 ),
  EW_GLYPH( 0x00E9, 0, -11, 7, 11, 7, 0x0000820B ),
  EW_GLYPH( 0x00EA, 0, -11, 7, 11, 7, 0x00008316 ),
  EW_GLYPH( 0x00EB, 0, -11, 7, 11, 7, 0x00008426 ),
  EW_GLYPH( 0x00EC, 0, -11, 3, 11, 4, 0x00008538 ),
  EW_GLYPH( 0x00ED, 1, -12, 3, 12, 4, 0x00008588 ),
  EW_GLYPH( 0x00EE, 0, -11, 4, 11, 4, 0x000085E6 ),
  EW_GLYPH( 0x00EF, 0, -11, 4, 11, 4, 0x00008659 ),
  EW_GLYPH( 0x00F0, 0, -11, 7, 11, 7, 0x000086BA ),
  EW_GLYPH( 0x00F1, 0, -11, 7, 11, 7, 0x000087C2 ),
  EW_GLYPH( 0x00F2, 0, -11, 7, 11, 7, 0x00008894 ),
  EW_GLYPH( 0x00F3, 0, -11, 7, 11, 7, 0x0000898C ),
  EW_GLYPH( 0x00F4, 0, -11, 7, 11, 7, 0x00008A7F ),
  EW_GLYPH( 0x00F5, 0, -11, 7, 11, 7, 0x00008B74 ),
  EW_GLYPH( 0x00F6, 0, -11, 7, 11, 7, 0x00008C89 ),
  EW_GLYPH( 0x00F7, 0, -7, 7, 7, 7, 0x00008D84 ),
  EW_GLYPH( 0x00F8, 0, -8, 7, 8, 7, 0x00008E04 ),
  EW_GLYPH( 0x00F9, 0, -11, 7, 11, 7, 0x00008EE9 ),
  EW_GLYPH( 0x00FA, 0, -11, 7, 11, 7, 0x00008FA1 ),
  EW_GLYPH( 0x00FB, 0, -11, 7, 11, 7, 0x0000905A ),
  EW_GLYPH( 0x00FC, 0, -11, 7, 11, 7, 0x00009115 ),
  EW_GLYPH( 0x00FD, 0, -12, 6, 15, 6, 0x000091CF ),
  EW_GLYPH( 0x00FE, 1, -11, 6, 14, 7, 0x000092F7 ),
  EW_GLYPH( 0x00FF, 0, -11, 6, 14, 6, 0x000093D8 ),

  EW_FONT_PIXEL( ApplicationErrorFont, 0x000094F3 )             /* ratio 75.51 % */
    0xBDEF7BFF, 0xEF798DF7, 0xA28AC3BD, 0xB11AFA3F, 0x30BF6FD0, 0x1B918372, 0xFA2FDBF4,
    0x28ACB11A, 0xDEF313FA, 0x5FDF877B, 0xC470C258, 0xE79A726F, 0xCCC2073C, 0xC4E57299,
    0x9C2DF9FC, 0xE5231330, 0x6BAD6E34, 0x5FDAE33F, 0x918847DC, 0xDF162348, 0xAF8EBA76,
    0x70F78EEB, 0x86F22652, 0x59EFB189, 0xF79BFFE2, 0xA2453151, 0x8897E2A0, 0xA93FD46F,
    0x9E0718FF, 0x35240477, 0x7FE1538D, 0x3BF53E2A, 0x78080BEB, 0x19B18FEF, 0x8FDE9AEB,
    0x9A88C8F9, 0x9CC647CC, 0xDF5AEB18, 0xD5FDEF07, 0xEBB9C04C, 0x4F98C0EC, 0xF7C5E7DF,
    0x5882710D, 0xCC138873, 0x79F7D115, 0xE449FFCD, 0xF2C49CFB, 0x53896103, 0x41118F2A,
    0x7BEFF73D, 0xEDDDF99E, 0x0007B67B, 0x3C328F6C, 0xDEBB3BFD, 0x31918F39, 0x39C7E327,
    0xA3FFC7A6, 0x129A6186, 0x878614C0, 0xCC7FFC1A, 0xFE273878, 0x37E35441, 0x6307AC93,
    0x81183CE3, 0x11829829, 0x26C60F38, 0x5337E1EB, 0x66688D3C, 0x7C4667D7, 0x38C2CE22,
    0xEF300040, 0xBBCE6F76, 0x04009BDD, 0x6315C9C6, 0xBEB7F88C, 0x00EE79F7, 0x8DBE0FCC,
    0x02A785CC, 0x0F18C5DF, 0x3F9E0B7E, 0xC0FFE14A, 0x407A21FA, 0xBC17EEFE, 0xD64FE771,
    0x3D3295F1, 0x00206151, 0x65103080, 0x8EB2A27A, 0xCEE378AF, 0xBFDF5C9F, 0xC199BE78,
    0x00005FFA, 0x00000000, 0xBBEDDCF0, 0x7F73BE23, 0xE37B8E43, 0x39B86F18, 0x73902FE0,
    0xB3175E24, 0x347A20E6, 0x3CF1717E, 0xDE6FE073, 0xCEFE477B, 0xB3FF18F9, 0x565315EB,
    0xEA780881, 0x8AAFDC65, 0xC43F8F71, 0x4A300319, 0xCFB31C9E, 0xC34F2176, 0x127A811B,
    0x0D93C17A, 0x059606FD, 0xD9CDEF3B, 0xCE6F7BBF, 0xBF044006, 0xCE66EF7B, 0xE402377B,
    0xF3E88005, 0xFDBB9C1B, 0x080C6F21, 0x472711F2, 0x85C6F7BC, 0x3DA8BDFC, 0xFCF7C4FF,
    0xF10F9F8B, 0xCE7940CC, 0x3CF7A4BF, 0xA2F8F05F, 0xF8A88186, 0xEBFCA2FC, 0xDEEB7F3E,
    0x7BAD6F7B, 0x55F09B6F, 0xBE1FE462, 0xF02AB058, 0x859381C4, 0x0FA607A8, 0xEC61237E,
    0xB9E707BB, 0xEDB911CF, 0x447FB60C, 0x2F5BF9CC, 0x746913C7, 0x8F17E7DF, 0x218A3A27,
    0x17E98AC4, 0x9F77DF15, 0x2FEFB53F, 0xAE3757E5, 0x08E6F68A, 0x8A58F9A4, 0xA6D3BF7C,
    0x062B3FF9, 0x8CE226B2, 0x09E76797, 0xE783BACE, 0x00773C0E, 0x73C0EE78, 0x003B9E07,
    0xC62B938C, 0x306FF118, 0x7FBF9076, 0x763BBC45, 0xC97E739B, 0xE24BF39C, 0xBF2376DD,
    0xEF7988FF, 0xBDE737BD, 0xCC04DEF7, 0xB9BDEF7B, 0x779980DE, 0xEFDF7E21, 0x37CED44C,
    0x66F1FE79, 0x7FDF7EFE, 0x3C2EF27A, 0xFAB69EFB, 0xF2CCD6FE, 0xF21C78B8, 0xF8EF1637,
    0x620DEA33, 0x9D61B215, 0xEFB58000, 0x3DF621BF, 0xDF0FC777, 0x9CDE29DB, 0xD9D67C9E,
    0x9DFDF1FF, 0xCDF778DF, 0x5FCAD318, 0x46588325, 0x9026225A, 0xC47236A9, 0xA627DE27,
    0xDDAFDCDF, 0xFFF959E9, 0xD17FFF3F, 0xFF0149BF, 0xC601CE7D, 0x015281FD, 0xFF3C14BB,
    0xA9E2A3FC, 0x477188C2, 0xA8A51FB0, 0xF95B7FBA, 0x8ECB3BDF, 0x078C66E4, 0x7BDF678F,
    0x9EEA297F, 0x806A2075, 0xD45A8808, 0xDD47E33D, 0x17C076BB, 0x2A2F8005, 0x0BE7DEEA,
    0xCCA7BEE6, 0xFCBBBBF7, 0x1B994A6A, 0x10000242, 0xF8373212, 0xBE6992D5, 0xEFB5DDDF,
    0xEA21BF3D, 0x7407F89E, 0x60DCC84C, 0xCC00004E, 0x3A1B9909, 0xF13DD466, 0xBDEF7D8F,
    0x4DEF7519, 0xBDD40000, 0x0377BA9B, 0xDEEA2000, 0xFBDEFB9B, 0x07F7BA8B, 0xB6F75000,
    0x0001B7BA, 0xF7D9E011, 0x77DF3C7C, 0x29AE9FF7, 0x420DCC97, 0x2DEEF802, 0x0908B6F8,
    0xABF03732, 0xBFBE6169, 0x3FB53DFB, 0x11023B7C, 0xDD400000, 0xF7BA8B7B, 0x10000016,
    0x45FD8881, 0xF0440000, 0x000001DC, 0xEC060000, 0xAF5DDF1C, 0x88EEB1FD, 0xD033EF10,
    0x0DF3187E, 0xEA7858F4, 0x017D4F07, 0xCE630D9D, 0x84571D01, 0x87F6B1E8, 0x00000008,
    0xDD440000, 0x9E0FCFBB, 0xAF03515B, 0xAA0679A0, 0xD590B786, 0x7AE81E4F, 0xF95184E7,
    0x803FDF02, 0x02200018, 0xB7C3F388, 0x341106A3, 0x37E03518, 0xE035BC1A, 0x5ADE0D19,
    0x5E018CF0, 0xF3054F02, 0xF313FF7F, 0xE4EFDBED, 0x7EA78F57, 0x66763732, 0x0000A448,
    0x64522420, 0xBF4CEC6E, 0x63F53C7A, 0x9DFB7DBE, 0x15E7BDCE, 0x6367FEF3, 0x723000E4,
    0x96BFF79B, 0x00034F79, 0xFF580220, 0xEF585FFB, 0xF177DF7B, 0x8CFAA956, 0x0C99D8D8,
    0x4480010C, 0xC7636232, 0x558D6AB0, 0xDDE9F78B, 0xCBB7C5F3, 0xEDF8C0F3, 0xFC607DF5,
    0xCF7B9F76, 0x9FFBCC4B, 0x1007230D, 0xF7997950, 0x5DD43CF7, 0x84C6F015, 0x23D41B18,
    0x7F251D82, 0xEF3734F7, 0xC4FCA9FD, 0xCC4F07C0, 0xD45F125F, 0xF13F6A2E, 0x1227BF21,
    0xFC5351B6, 0xDCFFD62B, 0xDEF77CF8, 0x3F77D77B, 0x00002EFB, 0x00000000, 0xC69C4000,
    0x022044FE, 0x00000000, 0x84022000, 0xEBCCC35A, 0x7BFBFF9B, 0xDC636F9F, 0x3CA08FFA,
    0x623FE1E5, 0x678AA6C4, 0x1FB3F8C8, 0x3718A8A5, 0x154F1183, 0xB0DCFF3C, 0x2315051F,
    0x5DE4FEF8, 0x4C3323AC, 0x2FE9FE7F, 0x2D358B0D, 0xB9257F8F, 0x186B1C65, 0xE433C3C3,
    0x30699E2F, 0x9CF188E6, 0x2B3FC0FF, 0x960F918D, 0x5E73D8FD, 0xCCD73C64, 0x8F13C0F1,
    0x7DD4188C, 0x23CA8F78, 0x31ABE2D6, 0xDF8AC7E3, 0xCCE624F7, 0xC2447F86, 0xD51898C9,
    0xE7CDE1F5, 0x9F3E478C, 0x98BF5F27, 0x27BC637C, 0x4C5FFEF8, 0x7C633CF1, 0xACDEBC66,
    0xDF27856F, 0x0D65F0FC, 0x00000D94, 0xEF710420, 0xBDC4F7BD, 0x2F682B77, 0xABC0D546,
    0xB40D4F91, 0xD0353E46, 0x40D4F91A, 0x71EF7BA9, 0x033888EE, 0x00000000, 0x338CE220,
    0x87FB0AB0, 0x6154491A, 0xC83CF1FF, 0xD8D9E0F1, 0xF7D91A85, 0x000009ED, 0x9989E800,
    0x3CF1FBE4, 0x4637BF0F, 0xAAFDF8C6, 0xEF7B8D54, 0x8563B7BD, 0x879CBDF8, 0x71777FF7,
    0x331F9DEF, 0x3BE308DD, 0x3F77F11F, 0x7840DE32, 0x9FFBB25C, 0x0221A791, 0x4CFFCF00,
    0x90EDFFD6, 0x0148589E, 0x278A8520, 0xEDFFD456, 0x967BBF90, 0xF91AEEEB, 0x007A6397,
    0xFE460F4C, 0x1DEEB945, 0x0204DCF0, 0x8BCFFC60, 0xF2314F33, 0x004D33F8, 0x5E46134C,
    0x33FD6717, 0x83DDDFC8, 0x18D73EE3, 0xD391FF7F, 0xBBEC9963, 0x7BBF4D63, 0x8AE318CF,
    0xCBDCE387, 0x39F49FF8, 0x1E54F129, 0x0001E54F, 0xEA044000, 0x7D7DEF7F, 0x8DEB3BBF,
    0xE229EC78, 0xF7BF27B1, 0xE7FF2F3E, 0x1CD724EE, 0x1B7BD1C8, 0x18DF9EEB, 0xF99E2253,
    0x7EE5FDBF, 0x7F200021, 0xEF7E63F7, 0x263C5433, 0x04400000, 0x63FB7F62, 0x11000477,
    0x01FD8FEC, 0x000089BB, 0x1E440000, 0x0441FDBF, 0x10779800, 0x3F5E0CFD, 0x18837CE6,
    0x0737EB07, 0xBA1168E6, 0x0022D39E, 0x5DE08000, 0xDF77FF3F, 0x90FF9D6F, 0x9EE7EECF,
    0x67E91E68, 0x0000004D, 0x02110000, 0xBEEFFE11, 0x7BFCF92F, 0x00289E0E, 0x04400000,
    0xC5DDDFC8, 0x318BEB71, 0x9A6A2F8E, 0xD34C0486, 0x5F1C6390, 0x5F3EE394, 0x24CFBD38,
    0x49DBFF9E, 0xE90513C5, 0xD21C2000, 0xDFFD628C, 0x99FF9E4E, 0xF8C02200, 0xBBA6FBFF,
    0xB8C629FE, 0xC004D32E, 0xF1E46134, 0x30A799C7, 0x0005E7FE, 0x8FEF7F84, 0x013C7FFA,
    0xA0440000, 0xFEB599CF, 0xB1198577, 0xAEE57BE2, 0xD55FCAF9, 0xAE79AC18, 0xD6243FD6,
    0x3AAAC753, 0x2C400000, 0x4CE2389C, 0x08114DCF, 0x88000000, 0xEB78BBF8, 0xE6DF0FFF,
    0xD611FFDB, 0x772278F3, 0x1A947EC6, 0x64FD847B, 0x64FEB151, 0xE4FDF28E, 0x69C9E699,
    0x9D9F75C6, 0x78E478C6, 0x3D2FFF8C, 0x67AE723B, 0x3DAC788C, 0x76197D72, 0x516BFE3D,
    0x7D6C55B9, 0xCCFBFFC2, 0xDF5CDF27, 0x4F1E8679, 0x4F7E0433, 0x3EE79CB5, 0xECA9F3A3,
    0xEDFBF36F, 0x6A519E11, 0xAFF1CEC4, 0x3FFABF28, 0x467F58D4, 0x5132A166, 0x547F9185,
    0xBDEF7514, 0x1E9DEEAB, 0x2FC93D72, 0xD24F5C9A, 0xF2567C9A, 0xE7B6F798, 0x712E772C,
    0x9CAC5801, 0x2B265864, 0x9DCB8800, 0x00084E2B, 0xA2000000, 0x7BE93BE3, 0x0E20001E,
    0x7E263D67, 0x000791EB, 0xEFC3CF7C, 0xEE1BF8CC, 0x83FB1FBD, 0x04B7C1FD, 0x020C1493,
    0x73DFC87C, 0x8D76AB96, 0x3D31CBFC, 0x2307A600, 0x751CA2FF, 0xCE7BF187, 0x8CBB9E62,
    0xF29777F7, 0xEEDD0000, 0x006EEDD6, 0xBC1EFC89, 0xF1DDEEB9, 0x8B6FDDFF, 0xA878EFB9,
    0xC7A87EC7, 0x37DCC47E, 0xBE09EF1F, 0x6A258FF3, 0xF8ADFE56, 0x35FF2AF9, 0xDFD5F8CC,
    0x9F7A6273, 0x9F7D6EE7, 0x9F7D6EE7, 0x1F7D6EE7, 0x13882100, 0x4E210002, 0x00084E20,
    0xACCE7D04, 0x2A15BFF5, 0xF9DEC9F2, 0x8E6F958C, 0x77CC9F7E, 0x755ACF3F, 0x1AAF3FF4,
    0xF577BC61, 0xEB035FD7, 0x7BC4F77F, 0x197B3DEE, 0xF79DFDE3, 0x3EF7E5FB, 0xF3EF5E79,
    0xD691FF8C, 0x088C043F, 0xF19E2301, 0xFFF5863F, 0xF1DB89FA, 0xBEBF233E, 0xEF4BF7EF,
    0x5FF3DEFF, 0x8C46739E, 0xF2CFFEF8, 0x7DFC459F, 0xAD54F7D3, 0x17F7DF39, 0xDBEF9CC0,
    0xD9AD4F7C, 0xAB7BDEF7, 0x0057BDEF, 0xDEFABBC0, 0x7BBFF587, 0x9EF73DE2, 0xFFD18CBD,
    0xBF2FDFDB, 0xEF15DE57, 0xF5880CF3, 0x463EF20F, 0x231E7904, 0xB1CC419E, 0x4FC75FFE,
    0x5F919F7B, 0xF7A5FE89, 0x2FF9EF7F, 0xF62FDEFB, 0x7EFBE73F, 0x31FDFB30, 0xCC00100E,
    0xF39BDDBB, 0x0026F76E, 0xBAC1C601, 0xEA3BDEF7, 0xFBB9AFFF, 0xABCE4864, 0xF8F18C4F,
    0xFE757EEA, 0x0BEF9CF9, 0xECB3D8F7, 0xF3A893AF, 0x7FBC5CB6, 0x3CE27F39, 0x004410FA,
    0xB6000000, 0x0DFBF982, 0x01B9BF7C, 0xF77E3004, 0x72FF1DDE, 0x0402BFF3, 0xC8054010,
    0x049D402F, 0x20000000, 0x4CF1E704, 0x5B3C6FD6, 0x2EBBB510, 0xE67D8800, 0x310FFF9C,
    0x7CF7FFE7, 0xF559E1FE, 0xCEFBF47C, 0x77DE0829, 0xFAACF9AE, 0x1930AA3E, 0x32E33FFF,
    0x203FBC3E, 0xC01EF024, 0x3D897EA8, 0xE7C83E4F, 0x783F7E7B, 0x6703C37E, 0x8D33DCD5,
    0x533DDD61, 0xFFE32615, 0x87C65C67, 0x048407F7, 0xCF1803DE, 0xF338AF3E, 0xD72539C4,
    0xF0F1C8F7, 0x39B788FC, 0x8319AF8B, 0xCEB7FEA7, 0xE7A6793F, 0x0A671F7C, 0x7B0318F7,
    0xFEC3F796, 0xBC49243A, 0xEF3A89C7, 0xF3CCD51D, 0x03E67FCF, 0x186BF9FF, 0xC7D7FAC3,
    0x3EB739FB, 0xE3002DC6, 0x56056216, 0x7109FB23, 0x37CE8FC7, 0x318C2CC8, 0x7FEBD13C,
    0x01F7E4DF, 0x2FC8256F, 0x2835F8C0, 0xC14BB015, 0x2A3FCFF3, 0x188C2A9E, 0x51FB0477,
    0xB7FBAA8A, 0xB3BDFF95, 0xC66E48EC, 0xE078F078, 0x058CC0BF, 0x7BE301C6, 0x5D80A941,
    0xFE7F9E0A, 0x6154F151, 0xD823B8C4, 0xDD54528F, 0xEFFCADBF, 0x7247659D, 0xC783C633,
    0xFCC03983, 0x9BDF009F, 0xA03B9CF0, 0x052EC054, 0xA8FF3FCF, 0x6230AA78, 0x47EC11DC,
    0xDFEEAA29, 0xCEF7FE56, 0x19B923B2, 0x31E3C1E3, 0x8C3FBDCE, 0xC60FEF73, 0x015281FD,
    0xFF3C14BB, 0xA9E2A3FC, 0x477188C2, 0xA8A51FB0, 0xF95B7FBA, 0x8ECB3BDF, 0x078C66E4,
    0xF73D878F, 0x82F73D82, 0x54A07F71, 0xCF052EC0, 0x78A8FF3F, 0xDC6230AA, 0x2947EC11,
    0x56DFEEAA, 0xB2CEF7FE, 0xE319B923, 0x9C61E3C1, 0x807FA81F, 0x401007FA, 0x0A5D80A9,
    0x51FE7F9E, 0xC46154F1, 0x8FD823B8, 0xBFDD5452, 0x9DEFFCAD, 0x33724765, 0x83C783C6,
    0x7BDEF73C, 0xBDCE1E07, 0x092BE077, 0xF80B5E54, 0xFAC0928F, 0x1EF7BC45, 0xF7594C66,
    0x1DCEFE1E, 0xBDF6B20B, 0x20E4F09D, 0xA615F023, 0xF7316F73, 0xDFBE653D, 0x5357E5DD,
    0x1210DCCA, 0x90908000, 0x4B57C1B9, 0xDDDFD5A6, 0x99D7FAC5, 0xCE21F1C8, 0xC406B3FC,
    0xBEC9D981, 0xD466FFDF, 0x000137BD, 0xEA6EF750, 0x80000DDE, 0x926F7BA8, 0x723FDE0B,
    0x60FF90FE, 0x466F7BDF, 0x00137BDD, 0xA6EF7500, 0x0000DDEE, 0x26F7BA88, 0xE2FBD12B,
    0xBEED3AFE, 0xEEA33FDF, 0x800009BD, 0xF75377BA, 0x4400006E, 0xA9D37BDD, 0xFFA9C3FF,
    0x6F7BDF63, 0x137BDD46, 0xEF750000, 0x00DDEEA6, 0xF7BA8800, 0x5475BBE6, 0x0111EE1C,
    0x42200000, 0x9CBFDE2E, 0xFB0FF93F, 0x00000223, 0x3C088000, 0xC477DEA5, 0x6F39EB39,
    0x00000089, 0xD7C22000, 0xDB775FDD, 0x0000111F, 0xB0440000, 0x41BF3DEF, 0x0FF13DD4,
    0xE64131D0, 0x59DCE606, 0x01D67607, 0xB9904E60, 0x7514C741, 0xBAC3FC4F, 0xBDD64CF7,
    0x7C3F3A67, 0x41106A3B, 0x7E035183, 0x035BC1A3, 0xADE0D19E, 0xE018CF05, 0x1054F025,
    0x5FA201E7, 0xF980FCC0, 0xF313FF7F, 0xE4EFDBED, 0x7EA78F57, 0x66763732, 0x0000A448,
    0x64522420, 0xBF4CEC6E, 0x63F53C7A, 0x9DFB7DBE, 0xBC019C60, 0x17FF006B, 0x27FF7FCC,
    0xDFB7DBE6, 0x4F1EAFC9, 0xEC6E64FD, 0x014890CC, 0xA4484000, 0x99D8DCC8, 0xEA78F57E,
    0xF6FB7CC7, 0x0056213B, 0xF881FEDF, 0xFAC076FF, 0x7CC2DFDD, 0xF93BF6FB, 0x9FA9E3D5,
    0x199D8DCC, 0x00002912, 0x99148908, 0xAFD33B1B, 0x98FD4F1E, 0x277EDF6F, 0xC167B9D6,
    0x982CF73A, 0x989FFBFF, 0x277EDF6F, 0xF53C7ABF, 0x33B1B993, 0x00052243, 0x22912100,
    0xFA676373, 0x1FA9E3D5, 0xEFDBEDF3, 0x09BCDC44, 0xCC26F371, 0xCC4FFDFF, 0x93BF6FB7,
    0xFA9E3D5F, 0x99D8DCC9, 0x00029121, 0x91489080, 0xFD33B1B9, 0x8FD4F1EA, 0x77EDF6F9,
    0x9EDC8FAA, 0xA7129D35, 0xA7A8CD3F, 0xE269EA31, 0x6B3DA7F4, 0xBFF9853A, 0xBE63F7FF,
    0xBE0E7B7D, 0xC625887A, 0x29919DE6, 0x102FEFAD, 0x037409BF, 0x11CA4B37, 0x5847B34F,
    0x915EA7A6, 0x0F7F6FB3, 0xE63029C6, 0x4E237A05, 0x0227F65B, 0x00000011, 0x11000000,
    0x661AD420, 0xDFFCDF5E, 0x73C0FBDF, 0x806FBC02, 0x4DA7116F, 0x088113FB, 0x00000000,
    0x10088000, 0xAF330D6A, 0xEFEFFE6F, 0x380B907D, 0xDFDF21BB, 0x58F7CE25, 0x088113FB,
    0x00000000, 0x10088000, 0xAF330D6A, 0xEFEFFE6F, 0x9C67187D, 0x84E338C0, 0x89FD8D38,
    0x00000440, 0x40000000, 0x86B50804, 0xFF37D799, 0xC83EF7F7, 0xE43FDE05, 0x83FE41FC,
    0xFFDF04F7, 0x679E298B, 0xD78CCF8C, 0xF0ADF59B, 0xBE1F9BE4, 0x01B281AC, 0xE0840000,
    0x79804434, 0xFFBCCBCF, 0x003918D9, 0xFDE6DC8C, 0xD3DE65AF, 0xDF880880, 0xEB7E3FFD,
    0xC7A8BF3E, 0x02582A2F, 0xF9BE2CFF, 0xF0BAFBE1, 0xFF1E00D8, 0x0FD7EF88, 0x1BCE05FF,
    0xFDE07630, 0xEF7177FF, 0xDD331F9D, 0x1F3BE308, 0x323F77F1, 0x5C7840DE, 0x919FFBB2,
    0xABD053C8, 0xFFBC5FA0, 0xBDEE2EFF, 0x1BA663F3, 0x23E77C61, 0xC647EEFE, 0x4B8F081B,
    0x9233FF76, 0xFDFA133A, 0x78BAEE05, 0xF70F3DCF, 0xD331F9DE, 0xF3BE308D, 0x23F77F11,
    0xC7840DE3, 0x19FFBB25, 0x8F8E9C69, 0x4DDCFFDF, 0xEF26798F, 0xDEE2EEFF, 0xBA663F3B,
    0x3E77C611, 0x647EEFE2, 0xB8F081BC, 0x233FF764, 0xCE14E339, 0xFDE00538, 0x7BDC5DDF,
    0x374CC7E7, 0x47CEF8C2, 0x8C8FDDFC, 0x971E1037, 0x2467FEEC, 0xCF7059CF, 0xBC49EE1F,
    0x7BDC551D, 0x374CC7E7, 0x47CEF8C2, 0x8C8FDDFC, 0x971E1037, 0xA467FEEC, 0xEFFF7FF7,
    0xDEFB1F39, 0x96B7FF35, 0xCF11C927, 0xC9E77E36, 0xE3FC4B7B, 0x7F7BDE56, 0x40722719,
    0xE7A63218, 0xAE4F7EC9, 0xBF186FBE, 0xDEE3967B, 0x3911E467, 0x0CB0B04D, 0xAFDDBD64,
    0x17F93E6F, 0xBE316F1D, 0x388B7E8B, 0x03F7E213, 0xFDFC85CF, 0xCFB8E0F7, 0x7FDFC635,
    0x2658F4E4, 0xD358EEFB, 0xC633DEEF, 0x38E1E2B8, 0x849D42F7, 0x913B84EE, 0xC707BDBF,
    0xFE31AE7D, 0xC7A723FE, 0xC777D932, 0x9EF77E9A, 0x0F15C631, 0xF317B9C7, 0xE1BAFC14,
    0x7BEC8BCC, 0xAE7DC707, 0x23FEFE31, 0xD932C7A7, 0x7E9AC777, 0xC6319EF7, 0xB9C70F15,
    0x8379BC97, 0x400379BC, 0x1C1EEEFE, 0xF8C6B9F7, 0x1E9C8FFB, 0x1DDF64CB, 0x7BDDFA6B,
    0x3C5718C6, 0xEF5EE71C, 0xC7EC7AF6, 0x0000116E, 0x2F89EA11, 0xDAF5AAE6, 0x2000022D,
    0x974FFF82, 0x6B7EF7E7, 0x004537EC, 0xBE110000, 0xBEB7F5F5, 0x0089BB06, 0x10220000,
    0xF1BE06A7, 0xE3B7E1FB, 0x3F13BF90, 0x3995DC4E, 0x69A9F1C6, 0x2D300219, 0x7D718E43,
    0x5F5B8E51, 0x1F8DE718, 0x7FBDFFBF, 0xF933CC7A, 0xE4BEFBBF, 0x7839EFF3, 0x000000A2,
    0x7FC01100, 0x8C06F381, 0x7FDFC81D, 0x2FADC717, 0xA8BE38C6, 0x30121A69, 0x718E434D,
    0xFB8E517C, 0x033C817C, 0x46E80E7A, 0x38BBFEFE, 0xC6317D6E, 0xD34D45F1, 0x1A698090,
    0x8BE38C72, 0x0BE7DC72, 0xFEE84CEA, 0xD9079DC1, 0xADC716F7, 0xBE38C62F, 0x121A69A8,
    0x8E434D30, 0x8E517C71, 0x9C617CFB, 0xFFBF1F8E, 0xEB1E87BD, 0xEEEFE43C, 0xC5F5B8E2,
    0x3517C718, 0xA602434D, 0x8E31C869, 0x9F71CA2F, 0x6719C42F, 0x019C6710, 0x17777F20,
    0xC62FADC7, 0x69A8BE38, 0x4D30121A, 0x7C718E43, 0x7CFB8E51, 0x73C073C1, 0xEF7BE800,
    0xDEF7D5BD, 0x73C00B7B, 0xFFF77F20, 0x2ABB8E1B, 0x6A589C72, 0x6A09FD99, 0x37F7A64C,
    0xBE2788E4, 0x6EB3C678, 0x702FF87D, 0x837180DE, 0x9B9E3338, 0x00001022, 0x77F11000,
    0x1FFFD6F1, 0xFBC06790, 0x7116F80E, 0x45373C66, 0x00000020, 0xE2EFE220, 0x503FFFAD,
    0x2FF74267, 0x710DE670, 0x0229BACA, 0x00000001, 0x6F177F11, 0x9C41FFFD, 0xC6710671,
    0xA6710019, 0x0408A6E7, 0x44000000, 0xF5BC5DFC, 0x098C07FF, 0x85CCF027, 0xF9B7C7E7,
    0xCF08F6FD, 0xE7623528, 0x5F9457F8, 0xAC6A1FFD, 0x50B3233F, 0xC8C2A899, 0xD38A2A3F,
    0x67800110, 0xDFFC499F, 0x2C4F150E, 0x429000A4, 0xFF59627A, 0x3FF3C3B7, 0xFA011013,
    0xFAFE8FEB, 0xDF9B7C03, 0x8CF08F6F, 0x8E762352, 0xD5F9457F, 0xFAC6A1FF, 0x950B3233,
    0xFC8C2A89, 0x0000A2A3

  EW_FONT_KERNING_CODES( ApplicationErrorFont )
  EW_FONT_KERNING_VALUES( ApplicationErrorFont )
EW_END_OF_FONT_RES( ApplicationErrorFont )

/* Embedded Wizard */