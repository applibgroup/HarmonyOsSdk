/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#define PG_MAGIC	'P'
#define PG_RESET	'Z'
#define PG_COMMAND	'C'
#define PG_MAX_DATA	32768
struct pg_write_hdr {
	char	magic;
	char	func;
	int     dlen;
	int     timeout;
	char	packet[12];
};
struct pg_read_hdr {
	char	magic;
	char	scsi;
	int	dlen;
	int     duration;
	char    pad[12];
};
