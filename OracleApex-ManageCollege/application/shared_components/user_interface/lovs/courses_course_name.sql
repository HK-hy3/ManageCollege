prompt --application/shared_components/user_interface/lovs/courses_course_name
begin
--   Manifest
--     COURSES.COURSE_NAME
--   Manifest End
wwv_flow_imp.component_begin (
 p_version_yyyy_mm_dd=>'2024.11.30'
,p_release=>'24.2.2'
,p_default_workspace_id=>28118185333235957468
,p_default_application_id=>274321
,p_default_id_offset=>0
,p_default_owner=>'WKSP_HY3'
);
wwv_flow_imp_shared.create_list_of_values(
 p_id=>wwv_flow_imp.id(28129274668390613673)
,p_lov_name=>'COURSES.COURSE_NAME'
,p_source_type=>'TABLE'
,p_location=>'LOCAL'
,p_query_table=>'COURSES'
,p_return_column_name=>'COURSE_ID'
,p_display_column_name=>'COURSE_NAME'
,p_default_sort_column_name=>'COURSE_NAME'
,p_default_sort_direction=>'ASC'
,p_version_scn=>15617326189469
,p_created_on=>wwv_flow_imp.dz('20250410204845Z')
,p_updated_on=>wwv_flow_imp.dz('20250410204845Z')
,p_created_by=>'HIYAGUPTA385@GMAIL.COM'
,p_updated_by=>'HIYAGUPTA385@GMAIL.COM'
);
wwv_flow_imp.component_end;
end;
/
